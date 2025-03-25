import { Alert, Text, Image, ImageBackground , TouchableOpacity} from 'react-native';
import icons from '../../constants/icons.js';
import { styles } from './home.style.js';


function Home() {
function openPassenger() {
  Alert.alert('Abrir Passageiro')
}
function openRide() {
  Alert.alert('Abrir motorista') 
}

  return (
    <ImageBackground source={icons.bg} resizeMode='cover' 
        style={styles.bg}>

      <Image source={icons.logo} style={styles.logo}/>
      <TouchableOpacity style={styles.btn} onPress={openPassenger}>
        <Image source={icons.Passenger} style={styles.img} />
        <Text style={styles.title} >Passageiro</Text>
        <Text style={styles.text}>Encontre uma carona</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={openRide}>
        <Image source={icons.driver} style={styles.img} />
        <Text style={styles.title} >Motorista</Text>
        <Text style={styles.text}>Encontre uma carona</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
export default Home;