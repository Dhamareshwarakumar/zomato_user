import React, { useState } from 'react';
import {
    Button,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Octicon from 'react-native-vector-icons/Octicons';
import Rating from './Rating';


const DishDetailsPopup = ({ dishImage, dishName, dishPrice, dishRating, dishReviews, dishType, dishDescription }) => {
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <ScrollView>
                <Image
                    source={{ uri: dishImage }}
                    style={styles.image}
                />
                <Pressable style={styles.body}>
                    <View style={styles.header}>
                        <View style={[styles.iconContainer, { borderColor: dishType === 'Non-Veg' ? '#EB4D4B' : 'green' }]}>
                            {dishType === 'Non-Veg' ? (
                                <EntypoIcon name='triangle-up' color="#EB4D4B" size={16} />
                            ) : (
                                <Octicon name='dot-fill' color="green" size={16} style={{ paddingHorizontal: 4 }} />
                            )}
                        </View>
                        <Text style={styles.dishName}>{dishName}</Text>
                        {dishRating && (
                            <Rating dishRating={dishRating} dishReviews={dishReviews} />
                        )}
                        <View style={styles.divider} />
                        <Text>{dishDescription}</Text>
                    </View>
                </Pressable>
            </ScrollView>
            <Pressable style={styles.footer}>
                <View style={styles.counter}>
                    <EntypoIcon name='minus' color='#EF5354' size={20} onPress={() => quantity > 1 && setQuantity(quantity - 1)} style={styles.counterIcon} />
                    <Text style={styles.counterText}>{quantity}</Text>
                    <EntypoIcon name='plus' color='#EF5354' size={20} onPress={() => setQuantity(quantity + 1)} style={styles.counterIcon} />
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Basket')}>
                    <Text color='#EF5354' style={styles.button}>Add item ₹{quantity * dishPrice}</Text>
                </TouchableOpacity>
            </Pressable>
        </>
    );
};


export default DishDetailsPopup;

const styles = StyleSheet.create({
    image: {
        width: null,
        aspectRatio: 5 / 3,
        resizeMode: 'cover',
        borderRadius: 15,
        marginHorizontal: 8
    },
    body: {
        padding: 8,
    },
    header: {

    },
    iconContainer: {
        borderWidth: 1.5,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginVertical: 4
    },
    dishName: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
        marginVertical: 6
    },
    divider: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E5E5E5',
        marginVertical: 10
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        flexDirection: 'row',
        padding: 8
    },
    buttonContainer: {
        flex: 2.5,
        marginHorizontal: 8,
        backgroundColor: '#EF5354',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    button: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18
    },
    counter: {
        borderWidth: 1,
        borderColor: '#EF5354',
        flexDirection: 'row',
        padding: 4,
        flex: 1,
        justifyContent: 'space-between',
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#fcf2f3'
    },
    counterText: {
        fontSize: 18,
        color: '#000'
    },
    counterIcon: {
        paddingHorizontal: 4,
    }
});