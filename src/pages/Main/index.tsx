import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const Main: React.FC<Props> = ({navigation}) => {
  const currentBalance = '2.088,35';

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Main</Text>
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <BalancePanel currentBalance={currentBalance} />
      <EntrySummary />
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
