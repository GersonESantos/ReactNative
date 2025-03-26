import { TouchableOpacity, Text } from 'react-native';
import { styles } from './myButton.style.js';
function MyButton(props){
    return <TouchableOpacity style={styles.btnYellow} onPress={props.onPress}>
        <Text style={styles.textDark}>{props.text}</Text>
    </TouchableOpacity>

}

export default MyButton;