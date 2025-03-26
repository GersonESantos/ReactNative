import { Text, View } from 'react-native';
import  MyButton  from '../../components/myButton/myButton.jsx';
import MapView from 'react-native-maps';
import { styles } from './passenger.syte.js';
function Passenger(props) {
  return  ( 
    <View style={styles.container}>
     
      <MapView style={styles.map}/>
      <MyButton text="TESTE"/>   
    </View>
  );
} 
export default Passenger;