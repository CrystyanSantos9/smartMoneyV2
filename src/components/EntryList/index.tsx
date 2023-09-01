import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, Button} from 'react-native';
import EntryListItem from './EntryListItem';
import {Entry} from '../../types';
import {getEntries} from '../../services/Entries';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation, useIsFocused} from '@react-navigation/native';

type Props = {};

const EntryList: React.FC<Props> = () => {
  const [entriesFromDB, setEntriesFromDB] = useState<Entry[] | null>(null);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  async function loadEntries() {
    const data = await getEntries();

    console.log(JSON.stringify(data, null, 2));
    setEntriesFromDB(data);
  }

  useEffect(() => {
    if (isFocused) {
      loadEntries();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Últimos lançamentos </Text>
      <FlatList
        data={entriesFromDB}
        renderItem={({item}) => (
          <Text>
            - {item.description} : {item.amount}
            <Button
              title={item.id}
              onPress={() => {
                navigation.navigate('NewEntry', {
                  entryParam: JSON.stringify(item),
                });
              }}
            />
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

export default EntryList;
