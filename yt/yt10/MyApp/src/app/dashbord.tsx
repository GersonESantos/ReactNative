import { View, Text, StyleSheet } from "react-native";
export default function Dashbord() {
    return (
        <View>
            <Text style={styles.title}>Dashbord</Text>
            
        </View>
    );
}   
export const styles = StyleSheet.create({
    container: {
        flex: 1,    
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "red",
        fontSize: 24,
        fontWeight: "bold",
    },});

    