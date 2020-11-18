import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import { getMedia } from '../API';


/* Custom component to display thumbnails */
const CustomImage = ({ url, name, onPress }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.listItem}
        >
            <Image
                style={styles.image}
                source={{
                    uri: url
                }}
            />
            <Text style={{ color: 'white', textAlign: 'center' }}>
                {name}
            </Text>
        </TouchableOpacity>
    );
};



const HomeGallery = ({ navigation }) => {

    /* media is list of all photos and videos from the API */
    const [media, setMedia] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMediaItems = async () => {
        const mediaItems = await getMedia();
        setMedia(mediaItems);
    }

    /* Load data */
    useEffect(() => {
        getMediaItems();
        setIsLoading(false);
    }, []);

    /* Prop for FlatList. Defines list item */
    const renderItem = ({ item }) => {
        return (
            <CustomImage
                url={item.thumbnail200x200Url}
                name={item.name}
                onPress={() =>
                    navigation.navigate('Media', {
                        url: item.url,
                        type: item.type
                    })
                }
            />


        );
    }

    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Browse your exercise recordings here
            </Text>
            { isLoading ? <ActivityIndicator size="large" /> : (
                
                <FlatList
                    style={styles.listStyle}
                    numColumns={2}
                    data={media}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            )}

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    container: {        
        flex: 1,
    },

    title: {
        textAlign: 'center',       
        margin: 20 
    },

    image: {
        width: '100%',  
        height: 150,
    },

    listItem: {
        backgroundColor: '#242B38',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }


});

export default HomeGallery;