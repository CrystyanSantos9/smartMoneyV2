import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type Props = {
  currentBalance: String;
};

const BalancePanelLabel: React.FC<Props> = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: Colors.white,
  },
  value: {
    fontSize: 36,
    color: Colors.white,
  },
});

export default BalancePanelLabel;
