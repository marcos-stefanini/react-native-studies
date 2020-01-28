/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Routes from './src/routes/routes';
//import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
