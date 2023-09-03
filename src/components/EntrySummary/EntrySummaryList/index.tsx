import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const EntrySummaryList: React.FC<any> = () => {
  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: '$201'},
    {key: '2', description: 'Saude', amount: '$300'},
    {key: '3', description: 'Educação', amount: '$493'},
    {key: '4', description: 'Lazer', amount: '$1200'},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text>
            {' '}
            - {item.description} :{item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntrySummaryList;
