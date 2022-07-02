import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const album = {
    id: '11',
    name: 'Good vibes',
    by: 'Spotify',
    numberOfLikes: 38,
    imageUri: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
    artistsHeadline: 'The Beatles',
    songs: [{
        id: '1',
        imageUri: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
        title: 'Golden Slumbers',
        artist: 'The Beatles'
    }, {
        id: '2',
        imageUri: 'https://i.scdn.co/image/ab67616d0000b27368c051fd02c0fa0118fe2bb7',
        title: 'Latin Grammys',
        artist: 'Action Bronson'
    }, {
        id: '3',
        imageUri: 'https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png',
        title: 'Awaken, My Love!',
        artist: 'Childish Gambino'
    }, {
        id: '4',
        imageUri: 'https://d.newsweek.com/en/full/1802884/marvin-gayes-whats-going-turns-50.jpg?w=600&q=75&f=90c911d572055d9a5fb941e2640b1ab6',
        title: 'Mercy Mercy Me',
        artist: 'Marvin Gaye'
    },
    ]
}

const AlbumScreen = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route);
    }, [])

    return (
        <View>
            <Text style={{ color: 'white' }}>Hello from Album Screen</Text>
        </View >
    )
}

export default AlbumScreen