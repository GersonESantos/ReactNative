import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Likes: {likes}</Text>
      <Pressable style={styles.button} onPress={() => setLikes(likes + 1)}>
        <Text style={styles.buttonText}>Dar Like</Text>
      </Pressable>
    </View>
  );
}
useEffect(() => {
  console.log("Likes changed:",);
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});