import { View, Text, StyleSheet, Image} from "react-native";
import { Input } from "../components/input";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/images/image1.png")} 
        style={styles.illustration}
        />
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>Acesse sua conta com email e senha</Text>
      <View>
        <Input />
        <Input />
      </View>
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
    form:{
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 20,
        gap: 10,
    },
  
});
//# sourceMappingURL=index.js.map
