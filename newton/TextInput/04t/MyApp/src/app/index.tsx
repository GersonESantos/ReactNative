import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite seu texto..."
        value={text}
        onChangeText={setText}
        style={styles.input}
        maxLength={50} // Limita a 50 caracteres
        multiline={true} // Permite várias linhas
        numberOfLines={3} // Define 3 linhas visíveis
        secureTextEntry={false} // Não oculta texto (true para senhas)
        returnKeyType="done" // Muda o botão de retorno para "Concluído"
        onSubmitEditing={() => console.log('Texto enviado:', text)} // Ação ao pressionar retorno
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});