import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import RestaurentDetails from '../screens/RestaurentDetails';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetails from '../screens/OrderDetails';
import Basket from '../screens/Basket';


const Stack = createNativeStackNavigator();
const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name="HomeScreen"
                component={HomeTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Restaurent"
                component={RestaurentDetails}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="OrderDetails"
                component={OrderDetails}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="BasketScreen"
                component={Basket}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};


const Tab = createMaterialBottomTabNavigator();
const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: '#fff' }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarIcon: ({ color }) => <MaterialIcon name='delivery-dining' color={color} size={26} /> }}
            />
            <Tab.Screen
                name="History"
                component={OrdersNavigator}
                options={{ tabBarIcon: ({ color }) => <MaterialIcon name='history' color={color} size={26} /> }}
            />
            <Tab.Screen
                name='Basket'
                component={Basket}
                options={{
                    tabBarIcon: ({ color }) => <IonIcon name='fast-food' color={color} size={26} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={OrdersScreen}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesomeIcon name='user' color={color} size={26} />
                }}
            />
        </Tab.Navigator>
    );
};

const OrdersStack = createNativeStackNavigator();
const OrdersNavigator = () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen
                name="Orders"
                component={OrdersScreen}
            // options={{ headerShown: false }} 
            />
            <OrdersStack.Screen
                name="OrderDetails"
                component={OrderDetails}
                options={{ headerShown: false }} />
        </OrdersStack.Navigator>
    );
}

export default RootNavigator;