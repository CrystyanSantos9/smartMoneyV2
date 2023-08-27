import React from 'react';
import {Alert, Button, FlatList, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  const addEntry = () => {
    Alert.alert('Warning', 'Abrir tela adicionar');
    const name = 'crystyan';
    console.log(name);
  };

  return (
    <View style={{padding: 10}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Saldo: $2.102,45
      </Text>
      <Button onPress={addEntry} title="Adicionar" />
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Categorias
      </Text>
      <FlatList
        data={[
          {key: 'Alimentação: $200'},
          {key: 'Lazer : $ 125'},
          {key: 'Outros : $ 170'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Últimos lançamentos
      </Text>
      <FlatList
        data={[
          {key: 'Padaria Renascer: $2,00'},
          {key: 'Mercadinho S4 : $ 5,35'},
          {key: 'Mercadinho S4 : $ 5,5'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
