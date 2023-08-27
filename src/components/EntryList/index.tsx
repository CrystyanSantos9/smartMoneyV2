import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import EntryListItem from './EntryListItem';

type Props = {};

const EntryList: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <EntryListItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EntryList;
