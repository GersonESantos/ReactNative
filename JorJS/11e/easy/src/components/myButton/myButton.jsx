import { TouchbleOpacity, Text } from 'react-native';
import { styles } from './myButton.style.js';
function MyButton(){
    return <TouchbleOpacity>
        <Text style={styles.textDark}>Confirmar</Text>
    </TouchbleOpacity>

}

export default MyButton;