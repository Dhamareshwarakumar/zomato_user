import {
    useState,
    useRef
} from 'react';
import {
    Animated,
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React from 'react';

const DynamicHeader = () => {
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
            <AnimatedHeader animHeaderValue={scrollOffsetY} />
            <FlatList
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: { y: scrollOffsetY }
                            }
                        }
                    ],
                    { useNativeDriver: false }
                )}
                data={DATA}
                renderItem={({ item }) => (
                    <Text style={styles.scrollText}>{item.title}</Text>
                )}
            />
            <View style={{ position: 'absolute', top: 10, left: 10 }}>
                <Text>{JSON.stringify(scrollOffsetY)}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text>Hello Dhamareshwar Welcome to React Native</Text>
            </View>
        </SafeAreaView>
    );
};


const Max_Header_Height = 200;
const Min_Header_Height = 60;
const Scroll_Distance = Max_Header_Height - Min_Header_Height;

const AnimatedHeader = ({ animHeaderValue }) => {
    const animatedHeaderHeight = animHeaderValue.interpolate({
        inputRange: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, Scroll_Distance],
        outputRange: [Max_Header_Height, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, Min_Header_Height],
        extrapolate: 'clamp'
    });

    const animatedBackroundColor = animHeaderValue.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: ['red', 'blue'],
        extrapolate: 'clamp'
    });

    return (
        <Animated.View style={[styles.header, { height: animatedHeaderHeight, backgroundColor: animatedBackroundColor }]}>
            <Text style={styles.headerText}>React Native</Text>
        </Animated.View>
    );
};

export default DynamicHeader;

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        paddingTop: 10
    },
    headerText: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    scrollText: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        marginVertical: 20

    }
});

export const DATA = [
    {
        id: 1,
        title: 'Modern JS: A curated collection'
    },
    {
        id: 2,
        title: 'JavaScript notes for professionals'
    },
    {
        id: 3,
        title: 'JavaScript: The Good Parts'
    },
    {
        id: 4,
        title: 'JavaScript: The right way'
    },
    {
        id: 5,
        title: 'Exploring ES6'
    },
    {
        id: 6,
        title: 'JavaScript Enlightenment'
    },
    {
        id: 7,
        title: 'You dont know JS'
    },
    {
        id: 8,
        title: 'Learn JavaScript'
    },
    {
        id: 9,
        title: 'JavaScript succintly'
    },
    {
        id: 10,
        title: 'Human JavaScript'
    },
    {
        id: 11,
        title: 'JavaScript design patterns'
    },
    {
        id: 12,
        title: "JS50: 50 illustrations in JS"
    },
    {
        id: 13,
        title: 'Eloqent JavaScript'
    },
    {
        id: 14,
        title: 'Practical ES6'
    },
    {
        id: 15,
        title: 'Speaking JavaScript'
    }
];