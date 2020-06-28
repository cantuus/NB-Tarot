import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native'

import colors from '../config/colors'

export default function Tarot({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/chair.jpg')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',

    }
})