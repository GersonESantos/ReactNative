import { View, Text, StyleSheet, Image} from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/images/image1.png")} 
        style={styles.illustration}
        />
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>Acesse sua conta com email e senha</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
    illustration: { 
        width: "100%",
        height: 300,
        resizeMode: "contain",
        marginTop: 50,
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20, 
    },
    subtitle:{
        fontSize: 16,
        color: "#666",
    },  
    
  
});
//# sourceMappingURL=index.js.map
