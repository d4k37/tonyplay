import React, { useState } from 'react'
import {View, ImageBackground, Text, FlatList, ScrollView, KeyboardAvoidingView, Platform, Modal} from 'react-native'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { Header } from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect'
import {BorderlessButton, RectButtonProps, RectButton} from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
import { theme } from '../../@types/styles/theme'
import BannerImg from '../../assets/banner.png'
import { styles } from './styles'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { GuildIcon } from '../../components/GuildIcon'
import { ModalView } from '../../components/ModalView'
import {Guilds} from '../Guilds'
import { GuildProps } from '../../components/Guild'

export function AppointmentCreate(){
    const [category, setCategory] = useState('')
    const [openGuildsModal, setOpenGuildsModal] = useState(false)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    function handleOpenGuilds(){
        setOpenGuildsModal(true)
    }
    function handleGuildSelect(guildSelect: GuildProps){
        setOpenGuildsModal(true)
        setGuild(guildSelect)
    }

    return(
        <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
        <Background>
            <Header title="Agendar Partida"
            />

        <Text style={[styles.label, {marginLeft:24, marginTop: 36, marginBottom: 18}]}>Categoria</Text>
        <CategorySelect 
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
        />
            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                    {
                    //<View  style={styles.image}  />
                    <GuildIcon/>
                    }
                    <View style={styles.selectBody}>
                        <Text style={styles.label}>Selecione um Servidor</Text>
                    </View>
                        <Feather name="chevron-right" color={theme.colors.heading} size={18} />
                    </View>
                </RectButton>
                    
                <View style={styles.field}>
                    <View>
                        <Text style={styles.label}>Dia e M??s</Text>
                        <View style={styles.column}>
                    <SmallInput maxLength={2}/>
                    <Text style={styles.divider}>
                        /
                    </Text>
                    <SmallInput maxLength={2}/>
                    </View>
                    
                    </View>

                    <View>
                        <Text style={styles.label}>Hora e Minuto</Text>
                        <View style={styles.column}>
                    <SmallInput maxLength={2}/>
                    <Text style={styles.divider}>
                        :
                    </Text>
                    <SmallInput maxLength={2}/>
                    </View>
                    
                    </View>
                </View>
                <View style={[styles.field, {marginBottom: 12}]}>
                    <Text style={styles.label}>Descri????o</Text>
                    <Text style={styles.caracteresLimit}>Max 100 Caracteres</Text>
                </View>
                <TextArea
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
                />
                <View style={styles.footer}>
                    <Button title="Agendar"/>
                </View>
                
            </View>
        </Background>
        </ScrollView>
        <ModalView>
            <Guilds/>
            <Guilds/>
            <Guilds/>
            <Guilds/> 
        </ModalView>
        </KeyboardAvoidingView>
       
    )
}