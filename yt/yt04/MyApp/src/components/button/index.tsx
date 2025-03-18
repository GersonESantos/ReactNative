import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    title: string;
    onPress: () => void;
}

    export function Button({ title, onPress }: Props) {
    return (
        <TouchableOpacity 
        onPress={onPress} 
        activeOpacity={0.5} 
        style={styles.button}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}