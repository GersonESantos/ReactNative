import { useState } from "react";
import { View, Text, StyleSheet, } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/button";
import { Input } from "@/components/input";


export default function Index() {

    const [name, setName] = useState("")
    function handleNext() {
        router.navigate("./dashbord");
    } 
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Ola, {name}</Text>
        <Input onChangeText={(text => setName(text))} placeholder="Digite seu nome" />      
        <Button title="Entrar" onPress={handleNext}/>
        <Button title="Continuar" onPress={handleNext}/>
        <Button title="Sair" onPress={handleNext}/>
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