import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native'

export default class WelcomeScreen extends React.Component {
    render() {
        return (
            <ImageBackground
                style={styles.background}
                source={require('../assets/background.jpg')}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../assets/lemon-logo.png")} />
                    <Text>Whispers of the Universe</Text>
                </View>

                <Button title="One Card" style={styles.loginButton} onPress={() => this.props.navigation.navigate('ViewImageScreen')} />
                <Button title="Two Card" style={styles.loginButton} onPress={() => history.push("/twocard")} />
                <Button title="Affirmations" style={styles.registerButton} onPress={() => history.push("/affirmations")} />

            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65"
    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },

})
