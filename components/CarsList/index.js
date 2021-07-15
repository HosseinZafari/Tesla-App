import React from 'react'
import { View , Text, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItem';
import cars from './cars';
import styles from './styles';

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item , index}) => 
                    <CarItem
                        key={index}
                        title={item.title} 
                        subTitle={item.subTitle}
                        cta={item.cta}
                        image={item.image} 
                    />
                }
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'normal'} 
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList;
