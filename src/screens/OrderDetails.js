import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import toScientificNumber from '../utils/toScientificNumber';
import OrderItem from '../components/OrderItem';

import orders from '../data/orders';
const order = orders[0];
import resturents from '../data/restaurants';

const OrderDetails = () => {
    return (
        <View>
            <Image
                source={{ uri: order.Restaurant.image }}
                style={styles.image}
            />
            <View style={styles.header}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{order.Restaurant.name}</Text>
                    <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
                </View>
            </View>
            <FlatList
                data={resturents[0].dishes}
                renderItem={({ item }) => <OrderItem dishName={item.name} dishPrice={item.price} dishType={item.type} />}
            />
        </View>
    );
};

export default OrderDetails;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        resizeMode: 'cover',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginTop: 5,
        marginBottom: 3,
        marginHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 15,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        color: '#000',
        marginBottom: 5
    }
});