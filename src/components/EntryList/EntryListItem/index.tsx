import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

type Props = {};

const EntryListItem: React.FC<Props> = (props: Props) => {
  return (
    <View>
      <Text style={styles.title}> Últimos lançamentos </Text>
      <FlatList
        data={[
          {key: 'Alimentação: 1'},
          {key: 'Alimentação: 2'},
          {key: 'Alimentação: 3'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
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
