import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Star = ({ rating, num }) => (rating > num ? (rating <= (num + 0.5) ? (
    <FontAwesomeIcon name='star-half-full' color='#FFD700' size={13} style={styles.icon} />
) : (
    <FontAwesomeIcon name='star' color='#FFD700' size={13} style={styles.icon} />
)) : (
    <FontAwesomeIcon name='star-o' color='#FFD700' size={13} style={styles.icon} />
))

const Rating = ({ dishRating, dishReviews }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.ratingContainer}>
                <Star rating={dishRating} num={0} />
                <Star rating={dishRating} num={1} />
                <Star rating={dishRating} num={2} />
                <Star rating={dishRating} num={3} />
                <Star rating={dishRating} num={4} />
            </View>
            <Text style={{ fontSize: 12 }}> ({dishReviews})</Text>
        </View>
    );
};

export default Rating;

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
        borderWidth: 0.5,
        alignSelf: 'flex-start',
        padding: 2,
        borderRadius: 5,
        backgroundColor: '#fffdf0',
        borderColor: '#FFD700'
    },
    icon: {
        marginHorizontal: 1
    }
});