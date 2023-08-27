import React from 'react';

import BalanceLabel from '../../components/BalanceLabel';
import {StyleSheet, Text, View} from 'react-native';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import {Picker} from '@react-native-picker/picker';

type Props = {};

const Report: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <BalanceLabel />
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
      <EntrySummary />
      <EntryList />
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
