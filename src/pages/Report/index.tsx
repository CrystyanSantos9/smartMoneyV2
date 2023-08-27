import React from 'react';

import BalanceLabel from '../../components/BalanceLabel';
import {StyleSheet, Text, View} from 'react-native';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import RNPickerSelect from 'react-native-picker-select';

type Props = {};

const Report: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[{label: 'Todas Categorias', value: 'Todas Categorias'}]}
        />
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[{label: 'Últimos 7 dias', value: 'Últimos 7 dias'}]}
        />
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
