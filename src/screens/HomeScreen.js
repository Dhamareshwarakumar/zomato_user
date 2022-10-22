import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React from 'react';

import RestaurentItem from '../components/RestaurentItem';
import restaurents from '../data/restaurants.json';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={restaurents}
                renderItem={({ item }) => (
                    <RestaurentItem
                        id={item.id}
                        title={item.name}
                        image={item.image}
                        subtitle={item.items}
                        rating={item.rating}
                        eta={item.estimatedDeliveryTimeAverage}
                        distance={item.estimatedDeliveryDistance}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        // backgroundColor: '#F6F9FE'
    }
});