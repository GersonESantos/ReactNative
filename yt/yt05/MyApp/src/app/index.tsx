import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "../components/button";
import { Input } from "../components/input";


export default function Index() {
    function handleMessage() {
        const name = "GersonES"
        Alert.alert("Hello " + name + "!");
    }
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Ola GersonES!</Text>
        <Input  placeholder="Digite seu nome" />
        
        <Button title="Entrar" onPress={handleMessage}/>
        <Button title="Continuar" onPress={handleMessage}/>
        <Button title="Sair" onPress={handleMessage}/>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
         padding: 32,   
         gap: 16 
        },
    title :{ 
        color: "red", 
        fontSize: 24,
        fontWeight: "bold",
    },
    });