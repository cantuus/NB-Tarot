import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar
} from 'react-native';

const App = () => {

  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} style={styles.text}>PADORU PADORU!!!!</Text>
      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }} />
      </TouchableHighlight>

      <Button
        color="orange"
        title="Click Me"
        onPress={() => Alert.prompt("my title", "my message", text => console.log(text))}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  }
})
export default App;