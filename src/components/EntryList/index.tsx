import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, Button} from 'react-native';
import EntryListItem from './EntryListItem';
import {Entry} from '../../types';
import {getEntries} from '../../services/Entries';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useIsFocused} from '@react-navigation/native';
import Container from '../Core/Container';

type Props = {
  onEntryPress: unknown;
  onPressActionButton: unknown;
};

const EntryList: React.FC<Props> = ({onEntryPress, onPressActionButton}) => {
  const [entriesFromDB, setEntriesFromDB] = useState<Entry[] | unknown[]>([]);

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
    <Container
      title="Últimos lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <FlatList
        data={entriesFromDB}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entriesFromDB.length - 1}
            onEntryPress={onEntryPress}
          />
        )}
      />
    </Container>
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
