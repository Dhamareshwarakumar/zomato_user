import React from 'react';
import {
    FlatList,
    Image,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

import DishListItem from '../components/DishListItem';

import toScientificNumber from '../utils/toScientificNumber';

import resturants from '../data/restaurants.json';

const RestaurentDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;

    const restaurent = resturants[id - 1];
    return (
        <View style={styles.page}>
            <Image
                source={{ uri: restaurent.image }}
                style={styles.image}
            />
            <View style={styles.iconContainer}>
                <IonIcon
                    name='arrow-back-circle'
                    size={38}
                    color='#fff'
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.header}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{restaurent.name}</Text>
                    <Text style={styles.subtitle}>{
                        restaurent.items.length !== 0 && restaurent.items.join(', ')
                    }</Text>
                    <Text style={styles.location}>{restaurent.location}</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 18, alignSelf: 'flex-start' }}>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>{restaurent.rating} </Text>
                        <FontAwesomeIcon name="star" size={16} color='#FFD700' style={{ marginTop: 3 }} />
                    </View>
                    <View style={styles.reviewsContainer}>
                        <Text style={{ fontSize: 14, color: '#000' }}>{toScientificNumber(restaurent.reviews)}</Text>
                        <Text style={{ fontSize: 10, color: '#666' }}>Reviews</Text>
                    </View>
                </View>
                <View style={styles.etaContainer}>
                    <MaterialIcon name='timelapse' color='#1FAA59' />
                    <Text style={styles.eta}> 34 min | 3 km</Text>
                </View>
            </View>

            <View style={styles.dishesContainer}>
                <FlatList
                    data={restaurent.dishes}
                    renderItem={({ item }) => <DishListItem
                        dishName={item.name}
                        dishPrice={item.price}
                        dishImage={item.image}
                        dishReviews={item.reviews}
                        dishRating={item.rating}
                        dishType={item.type}
                        dishDescription={item.description}
                    />}
                    ItemSeparatorComponent={() => <View style={[styles.listSeperator, Platform.OS == 'android' && ({ borderStyle: 'dashed' })]} />}
                    ListEmptyComponent={() => <Text style={{ textAlign: 'center', fontSize: 18, color: '#666' }}>No Dishes Found</Text>}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default RestaurentDetails;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F6F9FE'
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        resizeMode: 'cover',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        color: '#000',
        marginBottom: 5
    },
    location: {
        color: '#666',
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
    ratingContainer: {
        backgroundColor: '#1FAA59',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        paddingVertical: 4,
        marginVertical: 0,
        paddingHorizontal: 14
    },
    rating: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    reviewsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 17,
        borderBottomRightRadius: 18,
        borderBottomLeftRadius: 18,
        paddingBottom: 2
    },
    etaContainer: {
        position: 'absolute',
        top: -35,
        right: 15,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 1,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    eta: {
        fontSize: 12,
        color: '#000',
        fontWeight: 'bold'
    },
    iconContainer: {
        position: 'absolute',
        top: 15,
        left: 10,
    },
    dishesContainer: {
        flex: 1,
        paddingHorizontal: 8,
        marginTop: 3,
        marginHorizontal: 2,
        paddingVertical: 8,
        borderRadius: 15,
        backgroundColor: '#fff'
    },
    listSeperator: {
        borderTopWidth: 0.5,
        borderTopColor: '#ddd',
        marginVertical: 5,
    }
});