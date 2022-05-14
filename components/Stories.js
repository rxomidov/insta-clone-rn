import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from "react-native";
import {USERS} from "../data/users";

const Stories = () => {
    return (
        <View>
            <ScrollView horizontal showHorizontalIndicator={false}>
                {USERS.map((story, index) => {
                    return (
                        <View key={index} style={{alignItems: "center"}}>
                            <Image
                                source={{uri: story.image}}
                                style={styles.story}
                            />
                            <Text style={{color: '#fff'}}>
                                {story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + "..."
                                    : story.user.toLowerCase()}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
};

export default Stories;

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 70,
        borderWidth: 3,
        marginLeft: 6,
        borderColor: "#ff8501"

    },
});