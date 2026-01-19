import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/input";
export function FormStepOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        FormStepOne 
      </Text>
      <Input />
    </View>
  );
}