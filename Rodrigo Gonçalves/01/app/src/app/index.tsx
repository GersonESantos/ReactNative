import { View, Text, StyleSheet, Image} from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/image1.png")} />
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
  
});
//# sourceMappingURL=index.js.map
