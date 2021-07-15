import React from 'react'
import { View , Text, Pressable} from 'react-native';
import styles from './styles';

const TeslaButton = (props) => { 
    const backgroundColor = props.type === 'secondary' ? '#FFF' : '#171A20CC';
    const textColor       = props.type === 'secondary' ? '#171A20CC' : '#FFF'; 

    return (
        <View style={styles.container}>
            <Pressable 
                style={[styles.button , {backgroundColor: backgroundColor}]}
                onPress={props.onClick}>
                 
                <Text style={[styles.text , {color: textColor}]}>{props.content}</Text>
            </Pressable>
        </View>
    )
}

export default TeslaButton;
