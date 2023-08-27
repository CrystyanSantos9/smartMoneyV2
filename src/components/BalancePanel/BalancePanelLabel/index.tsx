import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

function BalancePanelLabel(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>$ 2.102,45</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 22,
  },
});

export default BalancePanelLabel;
