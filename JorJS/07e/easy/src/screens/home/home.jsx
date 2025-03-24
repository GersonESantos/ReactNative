import { Text, Image, ImageBackground } from 'react-native';
import icons from '../../constants/icons.js';
import { styles } from './home.style.js';
function Home() {
  return (
    <ImageBackground source={icons.bg} resizeMode='cover' 
    
    style={styles.bg}>
      <Image source={icons.logo} style={styles.logo}/>
      <Image source={icons.Passenger} style={icons.Passenger} />
      <Text style={styles.title} >Passageiro</Text>
      <Text style={styles.text}>Encontre uma carona</Text>
      
    </ImageBackground>
  );
}
export default Home;