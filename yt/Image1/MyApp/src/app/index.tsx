import { View, Text, StyleSheet, Image } from "react-native";
const img = require("../../assets/images/image.png");
export default function Index() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Ola GersonES!</Text>
        <Image style={styles.img} source={img}/>
        
        </View>
    );
    }

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
         padding: 32,
    
        },
    title :{ 
        color: "red", 
        fontSize: 24,
        fontWeight: "bold",
    },
    img: {
        width: 100,
        height: 100,
        margin: 16,
    },
    });