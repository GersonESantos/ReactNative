import { TextInput, StyleSheet } from "react-native";
export function Input(props) {
    return <TextInput style={styles.input} />
}
const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
    },
});