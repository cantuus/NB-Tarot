import * as React from 'react';
import firstTarot from '../assets/Tarot/tarot1.jpg'
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native'
import TarotCarousel from '../components/Carousel'

import colors from '../config/colors'
import TarotStore from '../config/tarotStore';

export default function Tarot({ navigation }) {

    let tarotArray = TarotStore.tarots

    return (
        < ImageBackground
            style={styles.background}
            source={require('../assets/chair.jpg')} >
            <View style={styles.tarotContainer}>
                <Image
                    resizeMode={"cover"}
                    style={styles.tarotImage}
                    source={tarotArray[Math.floor(Math.random() * tarotArray.length)]}
                />
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    tarotContainer: {
        flex: 2,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 50
    },
    tarotImage: {
        width: 150,
        height: 290,
    }
})