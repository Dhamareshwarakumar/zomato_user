import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import OrderListItem from '../components/OrderListItem';
import orders from '../data/orders';

const OrdersScreen = () => {
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <FlatList
                data={orders}
                renderItem={({ item }) => <OrderListItem order={item} />}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
            />
        </View>
    );
};

export default OrdersScreen;

const styles = StyleSheet.create({
    divider: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        marginVertical: 2
    }
});