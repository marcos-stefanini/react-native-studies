import About from '../components/About';
import Login from '../components/Login';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
    createStackNavigator({
        AOH: Login,
        About: About,
    })
);

export default Routes;