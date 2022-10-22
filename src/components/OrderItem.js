import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';


const OrderItem = ({ dishName, dishPrice, dishType }) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <View style={styles.orderItem}>
            <View style={{ flexDirection: 'row' }}>
                <View style={[styles.iconContainer, { borderColor: dishType === 'Non-Veg' ? '#EB4D4B' : 'green' }]}>
                    {dishType === 'Non-Veg' ? (
                        <EntypoIcon name='triangle-up' color="#EB4D4B" size={12} />
                    ) : (
                        <Octicon name='dot-fill' color="green" size={12} style={{ paddingHorizontal: 4 }} />
                    )}
                </View>
                <View style={{ marginLeft: 14, flex: 1 }}>
                    <Text style={styles.dishName}>{dishName}</Text>
                    <Text>₹{dishPrice}</Text>
                </View>
                <View style={styles.quantityContainer}>
                    <View style={styles.counter}>
                        <EntypoIcon name='minus' color='#EF5354' size={14} onPress={() => quantity > 1 && setQuantity(quantity - 1)} style={styles.counterIcon} />
                        <Text style={styles.counterText}>{quantity}</Text>
                        <EntypoIcon name='plus' color='#EF5354' size={14} onPress={() => setQuantity(quantity + 1)} style={styles.counterIcon} />
                    </View>
                    <Text style={styles.quantity}>₹{(quantity * dishPrice).toFixed(1)}</Text>
                </View>
            </View>
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    orderItem: {
        marginVertical: 10,
        paddingHorizontal: 12
    },
    iconContainer: {
        borderWidth: 1.5,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginVertical: 4
    },
    dishName: {
        fontSize: 15,
        color: '#000',
        fontWeight: '500'
    },
    quantityContainer: {
        marginLeft: 'auto'
    },
    counter: {
        borderWidth: 0.5,
        borderColor: '#EF5354',
        flexDirection: 'row',
        paddingVertical: 3,
        justifyContent: 'space-between',
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#fcf2f3'
    },
    counterText: {
        fontSize: 14,
        color: '#000',
        fontWeight: '500',
        marginHorizontal: 4
    },
    counterIcon: {
        paddingHorizontal: 8,
    },
    quantity: {
        fontSize: 14,
        color: '#000',
        alignSelf: 'flex-end',
        marginRight: 2,
        marginTop: 2
    }
});