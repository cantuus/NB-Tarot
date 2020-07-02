import * as React from 'react';
import firstTarot from '../assets/Tarot/tarot1.jpg'
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native'
import TarotCarousel from '../components/Carousel'

import colors from '../config/colors'
import AffirmationsStore from '../config/affirmationStore'

export default function AffirmationsScreen({ navigation }) {

    let cardArray = AffirmationsStore.cards

    return (
        < ImageBackground
            style={styles.background}
            source={require('../assets/chair.jpg')} >
            <View style={styles.afrmContainer}>
                <Image
                    resizeMode={"cover"}
                    style={styles.afrmImage}
                    source={cardArray[Math.floor(Math.random() * cardArray.length)]}
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
    afrmContainer: {
        flex: 2,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 50
    },
    afrmImage: {
        width: 200,
        height: 310,
    }
})