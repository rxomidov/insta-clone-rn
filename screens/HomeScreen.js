import React from 'react';
import {StyleSheet, SafeAreaView} from "react-native";
import Header from "../components/Header";
import Stories from "../components/Stories";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Stories/>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 20
    },
});