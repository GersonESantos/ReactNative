import { TextInput, StyleSheet, TextInputProps } from "react-native";
export function Input(props: TextInputProps) {
  return (
    <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50, 
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 20,
    fontSize: 16,
    color: "#333",
  },
});