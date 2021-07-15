import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        position: 'absolute' , 
        width: '100%',
        height: '13%',
        zIndex: 99 ,
        top: 1,
        justifyContent: 'space-between',
        alignItems: 'center' ,
        flexDirection: 'row',
        backgroundColor: '#00000009' , 
        paddingHorizontal: '4%'
    } , 

    logo: {
        width: 120 , 
        resizeMode: 'contain' , 
    } , 
    menu: {
        width:  35 , 
        height: 35 
    }

})

export default styles;