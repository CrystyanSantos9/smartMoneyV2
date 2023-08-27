import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const BalanceLabel: React.FC<any> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>$ 2.102,45</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
  },
  value: {
    fontSize: 18,
  },
});

export default BalanceLabel;
