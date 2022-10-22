import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import restaurents from '../data/restaurants.json';
const dish = restaurents[0].dishes[0];
import EntypoIcon from 'react-native-vector-icons/Entypo';

const DishDetailsScreen = () => {
    const [quantity, setQuantity] = useState(1);

    const getTotal = () => {
        return quantity * dish.price;
    }
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.seperator}></View>
            <View style={styles.row}>
                <EntypoIcon
                    name='minus'
                    color='#000'
                    size={40}
                    style={{ borderWidth: 4, alignSelf: 'flex-start', width: 50, height: 50, borderRadius: 25 }}
                    onPress={() => quantity > 0 && setQuantity(quantity - 1)}
                />
                <Text style={styles.quantity}>{quantity}</Text>
                <EntypoIcon
                    name='plus'
                    color='#000'
                    size={40}
                    style={{ borderWidth: 4, alignSelf: 'flex-start', bwidth: 50, height: 50, borderRadius: 25 }}
                    onPress={() => setQuantity(quantity + 1)}
                />
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} items to basket (${getTotal()})</Text>
            </View>
        </View>
    );
};

export default DishDetailsScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        padding: 10
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#000'
    },
    seperator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    quantity: {
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 20,
        color: '#000'
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        marginBottom: 15,
        padding: 20,
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});