import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';

function Main(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Main</Text>
      <BalancePanel />
      <EntrySummary />
    </View>
  );
}

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
