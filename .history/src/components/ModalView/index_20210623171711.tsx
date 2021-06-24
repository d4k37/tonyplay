import React, {ReactNode} from 'react'
import {View, Modal, ModalProps} from 'react-native'
import {styles} from './styles'


type Props = ModalProps &{
    children: ReactNode,
}

export function ModalView(){
return(

        <Modal
        transparent
        animationType="slide"
        {...rest}
        >
    
        </Modal>

  );
};