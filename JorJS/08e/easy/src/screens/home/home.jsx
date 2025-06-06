import { Text, Image, ImageBackground , TouchableOpacity} from 'react-native';
import icons from '../../constants/icons.js';
import { styles } from './home.style.js';
function Home() {
  return (
    <ImageBackground source={icons.bg} resizeMode='cover' 
        style={styles.bg}>

      <Image source={icons.logo} style={styles.logo}/>
      <TouchableOpacity style={styles.btn} >
        <Image source={icons.Passenger} style={styles.img} />
        <Text style={styles.title} >Passageiro</Text>
        <Text style={styles.text}>Encontre uma carona</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} >
        <Image source={icons.driver} style={styles.img} />
        <Text style={styles.title} >Motorista</Text>
        <Text style={styles.text}>Encontre uma carona</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
export default Home;