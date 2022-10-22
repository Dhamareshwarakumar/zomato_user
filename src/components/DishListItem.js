import React, { useRef } from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Octicon from 'react-native-vector-icons/Octicons';
import RBSheet from "react-native-raw-bottom-sheet";
import DishDetailsPopup from './DishDetailsPopup';

import Rating from './Rating';

const DishListItem = ({ dishRating, dishReviews, dishName, dishPrice, dishImage, dishType, dishDescription }) => {
    const refRBSheet = useRef();
    return (
        <>
            <Pressable style={styles.dishItemContainer} onPress={() => refRBSheet.current.open()}>
                <View style={{ flex: 1 }}>
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
                    <Text style={styles.dishPrice}>₹{dishPrice}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.likeIconContainer}>
                            <IonIcon name='heart-outline' color='#FF6263' size={20} />
                        </View>
                        <View style={styles.likeIconContainer}>
                            <IonIcon name='arrow-redo-outline' color='#FF6263' size={20} style={styles.likeIcon} />
                        </View>
                    </View>
                </View>
                <View>
                    <Image source={{ uri: dishImage }} style={styles.image} />
                    <View style={styles.addButton}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            {1 === 2 ? (
                                <EntypoIcon name='plus' color='green' size={20} />
                            ) : (
                                <Text></Text>
                            )}
                            <Text style={styles.addButtonText}>ADD</Text>
                            {1 === 2 ? (
                                <EntypoIcon name='minus' color='green' size={20} />
                            ) : (
                                <Text></Text>
                            )}
                        </View>
                    </View>
                </View>
            </Pressable>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown
                height={500}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }
                }}
            >
                <DishDetailsPopup
                    dishImage={dishImage}
                    dishName={dishName}
                    dishPrice={dishPrice}
                    dishType={dishType}
                    dishRating={dishRating}
                    dishReviews={dishReviews}
                    dishDescription={dishDescription}
                />
            </RBSheet>
        </>
    );
};

export default DishListItem;

const styles = StyleSheet.create({
    dishItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        marginTop: 20
    },
    iconContainer: {
        borderWidth: 1.5,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginVertical: 4
    },
    dishName: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 4
    },
    dishPrice: {
        color: '#000',
        fontWeight: '500',
        marginVertical: 4
    },
    likeIconContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 50,
        alignSelf: 'flex-start',
        padding: 5,
        marginHorizontal: 5,
        marginVertical: 4
    },
    image: {
        width: 140,
        aspectRatio: 1,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 0
    },
    addButton: {
        position: 'absolute',
        bottom: -12,
        left: '10%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 10,
        width: '80%',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    addButtonText: {
        color: 'green',
        fontWeight: '800',
        fontSize: 22,
    }
});