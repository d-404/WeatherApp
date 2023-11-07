import { AppRegistry } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'; // Path to your AppNavigator
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
