import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const NewEntry: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>
      <View>
        <Button title="Adicionar" />
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
