import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';
import EntryList from '../EntryList';

const EntrySummary: React.FC<any> = ({}) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList />
      <EntryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EntrySummary;
