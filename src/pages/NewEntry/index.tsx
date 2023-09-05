import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {saveEntry, deleteEntry} from '../../services/Entries';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Entry, RouteParamPropEntry} from '../../types';
import Colors from '../../styles/Color';
type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const NewEntry: React.FC<Props> = () => {
  const entryRouteParam: {entryParam: Entry} = {
    entryParam: {
      id: null,
      amount: 0,
      description: '',
      entryAt: new Date(),
    },
  };

  const route = useRoute<RouteProp<{entryParam: {entryParam: Entry}}>>();

  const {entryParam} = (route?.params || '') as
    | {entryParam: string}
    | {entryParam: Entry};

  const [entry, setEntry] = useState(
    entryParam ? JSON.parse(entryParam) : entryRouteParam.entryParam,
  );

  const navigation = useNavigation();

  const onSave = () => {
    saveEntry(entry);
    navigation.goBack();
  };

  const onRemove = () => {
    deleteEntry(entry);
    navigation.goBack();
  };

  const isValid = () => {
    if (entry.amount !== '' && parseFloat(entry.amount) !== 0) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      {/* //   {entryRouteParam && <Text>{JSON.stringify(entry, null, 2)}</Text>} */}
      <BalanceLabel />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setEntry({...entry, amount: text})}
          value={String(entry.amount)}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>
      <View>
        <Button title="Adicionar" onPress={() => isValid() && onSave()} />
        <Button title="Excluir" onPress={onRemove} />

        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.background,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
