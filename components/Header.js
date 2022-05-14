import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text} from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require('../assets/instagram-logo.png')}
                />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('../assets/more.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('../assets/heart.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image
                        style={styles.icon}
                        source={require('../assets/messenger.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 50,
        resizeMode: "contain"
    },
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: 10,
        resizeMode: "contain"
    },
    unreadBadge: {
        backgroundColor: "#ff3250",
        position: 'absolute',
        left: 16,
        bottom: 12,
        borderRadius: 25,
        width: 20,
        height: 14,
        alignItems: "center",
        justifyContent: 'center',
        zIndex: 99,
    },
    unreadBadgeText: {
        color: "white",
        fontSize: 10,
        fontWeight: '600',
    }
});