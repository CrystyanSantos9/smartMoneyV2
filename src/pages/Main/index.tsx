import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import EntryList from '../../components/EntryList';

import {saveEntry} from '../../services/Entries';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const Main: React.FC<Props> = ({navigation}) => {
  const currentBalance = '2.088,35';

  const entries = [
    {key: '1', description: 'Alimentação', amount: '$201'},
    {key: '2', description: 'Saude', amount: '$300'},
    {key: '3', description: 'Educação', amount: '$493'},
    {key: '4', description: 'Lazer', amount: '$1200'},
  ];

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: '$201'},
    {key: '2', description: 'Saude', amount: '$300'},
    {key: '3', description: 'Educação', amount: '$493'},
    {key: '4', description: 'Lazer', amount: '$1200'},
  ];

  const save = async () => {
    await saveEntry();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Main</Text>
      <Button
        title="Adicionar"
        // onPress={() => navigation.navigate('NewEntry')}
        onPress={save}
      />
      <BalancePanel currentBalance={currentBalance} />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 20,
  },
});

export default Main;
