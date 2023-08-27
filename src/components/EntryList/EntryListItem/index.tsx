import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {Entry} from '../../../types';

type Props = {
  entries: Entry[];
};

const EntryListItem: React.FC<Props> = ({entries}) => {
  return (
    <View>
      <Text style={styles.title}> Últimos lançamentos </Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text>
            - {item.description}: {item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryListItem;
