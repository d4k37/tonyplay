import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CategorySelect } from '../../components/CategorySelect';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENT } from '../../configs/database';

export function Home() {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation();

    const [appointments, setAppointments] = useState<AppointmentProps[]>([])

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  } 
  
  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  } 
  
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }  


  async function loadAppointments(){
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENT)
    const storage: AppointmentProps[] = response ? JSON.parse(response) : []

    if(category){
      setAppointments(storage.filter(item => item.category === category))
    }else{
      setAppointments(storage)
    }



  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>
    
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
    
      <ListHeader 
        title="Partidas agendadas"
        subtitle="Total 6"
      />

      <FlatList 
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointment 
            data={item} 
            onPress={handleAppointmentDetails}
          />            
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );  
}