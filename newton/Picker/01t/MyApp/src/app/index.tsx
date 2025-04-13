import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [selectedValue, setSelectedValue] = useState('opcao1');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione uma opção:</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Opção 1" value="opcao1" />
        <Picker.Item label="Opção 2" value="opcao2" />
        <Picker.Item label="Opção 3" value="opcao3" />
      </Picker>
      <Text>Você selecionou: {selectedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
    borderWidth: 5,
  },
});

export default App;