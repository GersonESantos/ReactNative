import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View>
      <TextInput placeholder="Digite algo..." 
                 style={styles.input}
                 keyboardType="email-address"
                 autoCapitalize="none"
      
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
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});