import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React from 'react';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import {NavigationContainerProps} from '@react-navigation/native';
import Colors from '../../styles/Color';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  currentBalance: String;
  navigation?: NavigationContainerProps;
};

const BalancePanel = ({onNewEntryPress}) => {
  const currentBalance = '2.088,35';

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
        <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
          <Icon name="add" size={30} color={Colors.white} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  panel: {paddingVertical: 10},
  button: {
    backgroundColor: Colors.green,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    width: 50,
    height: 50,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: -25,
    marginRight: 10,
  },
});

export default BalancePanel;
