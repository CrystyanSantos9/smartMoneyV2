import React from 'react';

import BalanceLabel from '../../components/BalanceLabel';
import {StyleSheet, View} from 'react-native';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import {Picker} from '@react-native-picker/picker';

type Props = {};

const Report: React.FC<Props> = () => {
  const currentBalance = '2.535,66';

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: '$201'},
    {key: '2', description: 'Saude', amount: '$300'},
    {key: '3', description: 'Educação', amount: '$493'},
    {key: '4', description: 'Lazer', amount: '$1200'},
  ];

  const entries = [
    {key: '1', description: 'Padaria da Praça', amount: '$2,50'},
    {key: '2', description: 'Sorvete', amount: '$2,00'},
    {key: '3', description: 'Mensalidade da Faculdade', amount: '$493'},
    {key: '4', description: 'Gasolina', amount: '$200,00'},
  ];

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker
          selectedValue={'Todas Categorias'}
          onValueChange={event => console.log(event)}>
          <Picker.Item label="Todas Categorias" value="Todas Categorias" />
        </Picker>
        <Picker
          selectedValue={'Últimos 7 dias'}
          onValueChange={event => console.log(event)}>
          <Picker.Item label="Últimos 7 dias" value="Últimos 7 dias" />
        </Picker>
      </View>
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
    fontSize: 12,
  },
  value: {
    fontSize: 18,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default Report;
