import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

const EntrySummaryList: React.FC<any> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={[
          {key: 'Alimentação: $201'},
          {key: 'Lazer: $1050.55'},
          {key: 'Educação: $493'},
          {key: 'Saúde: $340'},
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

export default EntrySummaryList;
