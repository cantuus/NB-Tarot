import 'react-native-gesture-handler'
import * as React from 'react';
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
  StatusBar,
  Dimensions
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-elements';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AffirmationsScreen from './app/screens/AffirmationsScreen';
import OneTarotScreen from './app/screens/OneTarotScreen'
import ThreeTarotScreen from './app/screens/ThreeTarotScreen'

const App = () => {

  const Stack = createStackNavigator();

  const theme = {
    colors: {
      menubutton: "#FADa5E"
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={WelcomeScreen} />
          <Stack.Screen name="One Tarot Draw" component={OneTarotScreen} />
          <Stack.Screen name="Three Tarot Draw" component={ThreeTarotScreen} />
          <Stack.Screen name="Affirmations" component={AffirmationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
};


export default App;