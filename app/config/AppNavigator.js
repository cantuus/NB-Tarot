import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen'
import ViewImageScreen from '../screens/ViewImageScreen';

const AppNavigator = createStackNavigator({
    WelcomeScreen: { screen: WelcomeScreen },
    ViewImageScreen: { screen: ViewImageScreen },
});