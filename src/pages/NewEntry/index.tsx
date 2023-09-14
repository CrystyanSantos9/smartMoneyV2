import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {saveEntry, deleteEntry} from '../../services/Entries';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Entry, RouteParamPropEntry} from '../../types';
import Colors from '../../styles/Color';
import NewEntryInput from './NewEntryInput';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const NewEntry: React.FC<Props> = () => {
  const InitialEntry: {entryParam: Entry} = {
    entryParam: {
      id: null,
      amount: 0,
      description: '',
      category: {id: null, name: 'Selecione'},
      entryAt: new Date(),
    },
  };

  const route = useRoute<RouteProp<{entryParam: {entryParam: Entry}}>>();

  const {entryParam} = (route?.params || '') as
    | {entryParam: string}
    | {entryParam: Entry};

  const [entry, setEntry] = useState(
    entryParam ? JSON.parse(entryParam) : InitialEntry.entryParam,
  );

  const [amount, setAmount] = useState(entry.amount);
  const [debit, setDebit] = useState(entry.amount <= 0 ? -1 : 1);

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
      {/* {debit && <Text>{JSON.stringify(debit, null, 2)}</Text>} */}
      <BalanceLabel />
      <View style={styles.formContainer}>
        <NewEntryInput
          value={entry.amount}
          onChangeValue={setEntry}
          onChangeDebit={setDebit}
        />
        <NewEntryCategoryPicker
          debit={debit}
          category={entry.category}
          onChangeCategory={setEntry}
        />

        <View style={styles.formActionContainer}>
          <NewEntryDatePicker
            value={new Date(entry.entryAt)}
            onChangeDate={setEntry}
          />
        </View>

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
  formContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  formActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default NewEntry;
