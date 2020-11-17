import React from 'react';

import { View, StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av';


const DislayMediaItem = ({ url, type }) => {

    /* Display Image or video depending on the type */
    if (type === 'image') {
        return (
            <Image
                source={{
                    uri: url
                }}
                resizeMode='contain'
                style={{ height: '100%', width: '100%' }}
            />
        );
    } else {
        return (
            <Video
                source={{ uri: url }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ height: '75vh', width: '100%' }}
            />
        );
    }
}



const MediaDetail = ({ route, navigation }) => {

    const { url, type } = route.params;

    return (
        <View style={styles.container}>
            <DislayMediaItem url={url} type={type} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: '2em'
    },

});

export default MediaDetail;