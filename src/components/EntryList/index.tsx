import {View, StyleSheet} from 'react-native';
import React from 'react';
import EntryListItem from './EntryListItem';
import {Entry} from '../../types';

type Props = {
  entries: Entry[];
};

const EntryList: React.FC<Props> = ({entries}) => {
  return (
    <View style={styles.container}>
      <EntryListItem entries={entries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EntryList;
