import { View, Text, StyleSheet } from "react-native";
import { Button } from "@/components/button";
import { router } from "expo-router";
export default function Dashbord() {
    return (
        <View>
            <Text style={styles.title}>Dashbord</Text>
            <Button title="Voltar " onPress={() => router.back()}/>
        </View>
    );
}   
export const styles = StyleSheet.create({
    container: {
        flex: 1,    
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
        gap: 16,
    },
    title: {
        color: "red",
        fontSize: 24,
        fontWeight: "bold",
    },});

    