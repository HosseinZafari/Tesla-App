import React from 'react';
import {View , Text ,  ImageBackground } from 'react-native';
import TeslaButton from '../TeslaButton';
import styles from './styles';

const CarItem = (props) => {

    const {title , subTitle , cta , image } = props;

    return (
        <View style={styles.carContainer}>
                <ImageBackground style={styles.image} source={image}/>
                <View style={styles.titles}>

                    <Text style={styles.title}>{title}</Text>

                    <Text style={styles.subTitle}>
                        {subTitle}&nbsp;
                        <Text style={styles.cta}>
                            {cta}
                        </Text>
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
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
        </View> 
    );
}
    
    
export default CarItem;