import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const RestaurentItem = ({ id, image, title, subtitle, rating }) => {
    const navigate = useNavigation();

    const goToRestaurent = () => {
        navigate.navigate('Restaurent', { id });
        return;
    };

    return (
        <Pressable style={[styles.card, styles.shadow]} onPress={goToRestaurent}>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={{ borderRadius: 5, backgroundColor: '#1FAA59', alignSelf: 'flex-start' }}>
                        <Text style={styles.rating}>{rating} <FontAwesomeIcon name="star" /></Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>{
                    subtitle.length !== 0 && subtitle.join(', ')
                }</Text>
                <View style={styles.etaContainer}>
                    <MaterialIcon name='timelapse' color='#1FAA59' />
                    <Text style={styles.eta}> 34 min | 3 km</Text>
                </View>
            </View>
        </Pressable>
    );
};

RestaurentItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    eta: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
    subtitle: PropTypes.array
};

export default RestaurentItem;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        width: '100%',
        elevation: 5,
        marginBottom: 20,
        borderWidth: 0.5,
        borderColor: '#ddd'
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        resizeMode: 'cover',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    infoContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    etaContainer: {
        position: 'absolute',
        top: -30,
        right: 10,
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 4,
        color: '#333',
        flexWrap: 'wrap',
    },
    subtitle: {
        color: '#666'
    },
    rating: {
        color: '#fff',
        // backgroundColor: '#1FAA59',
        paddingHorizontal: 6,
        paddingVertical: 3,
        // borderRadius: 5,
        fontSize: 12,
        fontWeight: 'bold'
    },
    shadow: {
        shadowColor: '#aaa',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});