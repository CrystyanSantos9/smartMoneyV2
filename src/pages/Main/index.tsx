import React, {useEffect} from 'react';
import Colors from '../../styles/Color';

import {View, Text, StyleSheet, Button, Dimensions} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import EntryList from '../../components/EntryList';

import {getEntries, saveEntry} from '../../services/Entries';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const Main: React.FC<Props> = ({navigation}) => {
  const save = async () => {
    await saveEntry();
  };

  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />

      <EntrySummary onPressActionButton={() => navigation.navigate('Report')} />

      <EntryList
        onEntryPress={entry =>
          navigation.navigate('NewEntry', {
            entryParam: JSON.stringify(entry),
          })
        }
        onPressActionButton={() => navigation.navigate('Report')}
      />
    </View>
  );
};

// const dimScreen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    // width: dimScreen.width,
  },
  label: {
    fontSize: 20,
  },
});

export default Main;
