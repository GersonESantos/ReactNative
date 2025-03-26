import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home/home.jsx';
import Passenger from './screens/passenger/passenger.jsx';
import Ride from './screens/ride/ride.jsx';
const stack = createNativeStackNavigator();

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
        <stack.Screen name='ride' component={Ride} 
            options={{
            headeerShown :false       
            }}/>
    </stack.Navigator>
    </NavigationContainer>
}
export default Routes;