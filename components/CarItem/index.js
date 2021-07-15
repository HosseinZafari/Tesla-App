import React from 'react';
import {View , Text ,  ImageBackground } from 'react-native';
import TeslaButton from '../TeslaButton';
import styles from './styles';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
                <ImageBackground style={styles.image} source={require('../../assets/images/ModelS.jpeg')}/>
                <View style={styles.titles}>
                    <Text style={styles.title}>Model S</Text>
                    <Text style={styles.subTitle}>Starting at $69.420</Text>
                </View>

                <TeslaButton 
                    content={'custom order'} 
                    onClick={() => console.warn('button clicked!')}
                />

                <TeslaButton
                    type={'secondary'} 
                    content={'Exsiting Enventory'}
                    onClick={() => console.warn('button clicked!')}
                />
        </View> 
    );
}
    
    
export default CarItem;