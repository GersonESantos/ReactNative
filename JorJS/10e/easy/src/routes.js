import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home/home.jsx';
import Passenger from './screens/passenger/passenger.jsx';
const stack = createStackNavigator();

function Routes() {
  return <NavigationContainer>
    <stack.Navigator>
        <stack.Screen name='home' component={Home} 
        options={{
            headerShown: false
        }}/>
        <stack.Screen name='passenger' component={Passenger} 
        options={{
            headeerShown :false       
            }}/>
    </stack.Navigator>
    </NavigationContainer>
}
export default Routes;