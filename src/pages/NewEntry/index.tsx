import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {saveEntry} from '../../services/Entries';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const NewEntry: React.FC<Props> = ({navigation}) => {
  const currentBalance = '2.535,66';

  const [amount, setAmount] = useState('0');

  const save = () => {
    console.log('NewEntry :: save ', amount);
    const value = {
      amount: amount,
    };

    saveEntry(value);
  };

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setAmount(text)}
          value={amount}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>
      <View>
        <Button title="Adicionar" onPress={save} />

        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
