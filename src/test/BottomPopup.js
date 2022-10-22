/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
import React, { Component } from "react";
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet
} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";
import MDIcon from "react-native-vector-icons/MaterialIcons";
import RBSheet from "react-native-raw-bottom-sheet";


FAIcon.loadFont();
MDIcon.loadFont();

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.Scrollable.open()} style={styles.button}>
                        <Text style={styles.buttonTitle}>SCROLLABLE</Text>
                    </TouchableOpacity>
                </View>

                {/* Grid Menu */}
                <RBSheet
                    ref={ref => {
                        this.Scrollable = ref;
                    }}
                    closeOnDragDown
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                        }
                    }}
                >
                    <ScrollView>
                        <View style={styles.gridContainer}>
                            {data.grids.map(grid => (
                                <TouchableOpacity
                                    key={grid.icon}
                                    onPress={() => this.Scrollable.close()}
                                    style={styles.gridButtonContainer}
                                >
                                    <View style={[styles.gridButton, { backgroundColor: grid.color }]}>
                                        <FAIcon name={grid.icon} style={styles.gridIcon} />
                                    </View>
                                    <Text style={styles.gridLabel}>{grid.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </RBSheet>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    buttonContainer: {
        alignItems: "center",
        marginTop: 50
    },
    button: {
        width: 150,
        backgroundColor: "#4EB151",
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 3,
        margin: 10
    },
    buttonTitle: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600"
    },

    gridContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        marginBottom: 20
    },
    gridButtonContainer: {
        flexBasis: "25%",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    gridButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    gridIcon: {
        fontSize: 30,
        color: "white"
    },
    gridLabel: {
        fontSize: 14,
        paddingTop: 10,
        color: "#333"
    },
});

export default App;

const data = {
    "lists": [
        {
            "icon": "photo-camera",
            "label": "Take photo"
        },
        {
            "icon": "photo",
            "label": "Choose image"
        },
        {
            "icon": "brush",
            "label": "Drawing"
        },
        {
            "icon": "mic",
            "label": "Recording"
        },
        {
            "icon": "check-box",
            "label": "Checkboxes"
        }
    ],
    "grids": [
        {
            "label": "Facebook",
            "icon": "facebook",
            "color": "#3b5998"
        },
        {
            "label": "Twitter",
            "icon": "twitter",
            "color": "#38A1F3"
        },
        {
            "label": "Google+",
            "icon": "google-plus-official",
            "color": "#DD4B39"
        },
        {
            "label": "Linkedin",
            "icon": "linkedin",
            "color": "#0077B5"
        },
        {
            "label": "Dropbox",
            "icon": "dropbox",
            "color": "#3d9ae8"
        },
        {
            "label": "Reddit",
            "icon": "reddit-alien",
            "color": "#FF4301"
        },
        {
            "label": "Skype",
            "icon": "skype",
            "color": "#00aff0"
        },
        {
            "label": "Pinterest",
            "icon": "pinterest",
            "color": "#c8232c"
        },
        {
            "label": "Flickr",
            "icon": "flickr",
            "color": "#ff0084"
        },
        {
            "label": "VK",
            "icon": "vk",
            "color": "#4c75a3"
        },
        {
            "label": "Dribbble",
            "icon": "dribbble",
            "color": "#ea4c89"
        },
        {
            "label": "Telegram",
            "icon": "send",
            "color": "#0088cc"
        }
    ]
}