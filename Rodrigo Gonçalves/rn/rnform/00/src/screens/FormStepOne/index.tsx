import React from "react";
import { Text, TextInput, View } from "react-native";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { styles } from "./styles";
import { useRef } from "react";

export function FormStepOne() {
  const { control } = useForm(); // Initialize react-hook-form
  const emailRef = useRef<TextInput>(null);
  function handleSubmit() {
    console.log(control);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>
      <Input        
        icon="user"
        formProps={{
          name: "name",
          control,
        }}
        inputProps={{
          placeholder: "Nome completo",
          keyboardType: "default",
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: "next",
        }}
        
      />{" "}
      <Input
      ref={emailRef}
        icon="mail"
        formProps={{
          name: "email",
          control,
        }}
        inputProps={{
          placeholder: "E-mail",
          keyboardType: "default",
          
        }}
        
      />{" "}
      {/* Pass control prop */}
    </View>
  );
}
