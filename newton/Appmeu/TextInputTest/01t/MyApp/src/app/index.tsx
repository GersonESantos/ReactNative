import { View, Text, TextInput,StyleSheet } from "react-native";
import React, { useEffect, useState } from 'react';



export default function TextInputTest() {
  const [nome, setNome] = useState("");
  return (
    <View style={style.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />    
  </View>
  );
}



const style = StyleSheet.create({
  container: { 
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      gap: 40,    
      },
  title :{ 
      color: "red", 
      fontSize: 24,
      fontWeight: "bold",
  },
  actions: {
      padding: 24,
      backgroundColor: "#14448080",
      width: "80%",
      borderRadius: 32,
      borderWidth: 2,
      borderColor: "#144480",
      alignItems: "center",
      gap: 40,
  },
  timer: {
      fontSize: 54,
      color: "#FFF",
      fontWeight: "bold",
      textAlign: "center"
  },
  
button: {
    padding: 24,
      backgroundColor: "#B872ff",
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