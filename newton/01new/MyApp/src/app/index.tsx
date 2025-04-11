import { View, Text, StyleSheet, Image, Pressable } from "react-native";
export default function Index() {
    return (
        <View style={style.container}>
          <View>
            <Image source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
          />
        </View>
        <View style={style.actions}>
          <Text style={style.timer}>20:00</Text>
            <Pressable style={style.button}>
                <Text style={style.textButton}>Pressione-me</Text>
            </Pressable>
        </View>
        <View style={style.footer}>
            <Text style={style.textfooter}>Curso de react Native EAD</Text>
            <Text style={style.textfooter}>2025 Meu App</Text>
        </View>

            
        </View>
    );
}
const style = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#021123",
        gap: 40,    
        },
    title :{ 
        color: "red", 
        fontSize: 24,
        fontWeight: "bold",
    },
    timer: {
        fontSize: 54,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center"},
    actions: {
      
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 24,
    },
  button: {
        backgroundColor: "#B872ff",
        padding: 16,
        borderRadius: 32,
        marginTop: 12,
    },
    textButton: {
      alignItems: "center",
        color: "#FFF",    
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",  
    },
    footer: {
        marginTop: 24,
        alignItems: "center",
    },
    textfooter: {
        fontSize: 18,
        color: "#333",
    },
    });