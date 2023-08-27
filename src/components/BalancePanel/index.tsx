import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import {NavigationContainerProps} from '@react-navigation/native';

type Props = {
  currentBalance: String;
  navigation?: NavigationContainerProps;
};

const BalancePanel: React.FC<Props> = ({navigation, currentBalance}) => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel currentBalance={currentBalance} />
      <BalancePanelChart />
      {/* <Button title="Adicionar" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BalancePanel;
