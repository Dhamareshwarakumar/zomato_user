import React from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OrderItem from '../components/OrderItem';

import restaurents from '../data/restaurants.json';

const restaurent = restaurents[3];

const Basket = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <MaterialIcon name='arrow-back-ios' style={styles.backArrow} />
                </Pressable>
                <Text style={styles.headerText}>{restaurent.name}</Text>
            </View>
            <ScrollView>
                <View style={styles.deliveryTime}>
                    <MaterialIcon name='timelapse' color='green' size={24} />
                    <Text style={{ marginLeft: 10, color: '#000', fontWeight: '500' }}>Delivery in 45 min</Text>
                </View>
                <View style={styles.order}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <View style={styles.dash} />
                        <Text style={styles.orderHeading}>Your Order</Text>
                    </View>
                    <OrderItem dishName={restaurent.dishes[0].name} dishPrice={restaurent.dishes[0].price} dishType={restaurent.dishes[0].type} />

                    <OrderItem dishName={restaurent.dishes[1].name} dishPrice={restaurent.dishes[1].price} dishType={restaurent.dishes[1].type} />

                    <OrderItem dishName={restaurent.dishes[2].name} dishPrice={restaurent.dishes[2].price} dishType={restaurent.dishes[2].type} />

                </View>
            </ScrollView>
            <View style={[styles.footer, styles.shadow]}>
                <View style={styles.address}>
                    <IonIcon name='location' color='#EB4D4B' size={26} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: '#000', fontWeight: '500' }}>Delivery at Home</Text>
                        <Text>6-9, Vinayak Nagar, 1st Road, Eluru</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.checkout}>
                    <View style={styles.payment}>
                        <Text>Paytm UPI</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View>
                            <Text style={{ color: '#fff', fontWeight: '500' }}>₹ 367.50</Text>
                            <Text style={{ color: '#fff', fontWeight: '400' }}>Total</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text color='#EF5354' style={styles.button}>Place Order</Text>
                            <EntypoIcon
                                name='triangle-right'
                                size={20}
                                color='#fff'
                                style={{ marginTop: 4 }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Basket;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F6F9FE'
    },
    header: {
        marginBottom: 20,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    headerText: {
        color: '#000',
        fontWeight: '500',
        fontSize: 18,
        marginLeft: 10,
        marginVertical: 8
    },
    footer: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#fff',
    },
    address: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    divider: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        marginVertical: 8
    },
    checkout: {
        flexDirection: 'row',
        padding: 8
    },
    payment: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 2.5,
        marginHorizontal: 8,
        backgroundColor: '#EF5354',
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18
    },
    deliveryTime: {
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 14,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    order: {
        backgroundColor: '#fff',
        marginTop: 16,
        marginHorizontal: 14,
        borderRadius: 14,
    },
    orderHeading: {
        color: '#000',
        fontWeight: '800',
        fontSize: 20,
        paddingLeft: 12,
    },
    dash: {
        borderRightWidth: 4,
        borderRightColor: '#EF5354',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        alignSelf: 'stretch',
    },
    backArrow: {
        fontSize: 22,
        color: '#000',
    }
});