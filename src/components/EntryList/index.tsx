import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import EntryListItem from './EntryListItem';
import {Entry} from '../../types';
import {getEntries} from '../../services/Entries';

type Props = {
  entries: Entry[];
};

const EntryList: React.FC<Props> = ({entries}) => {
  const [entriesFromDB, setEntriesFromDB] = useState<Entry[] | null>(null);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      console.log('getEntries :: entries ', JSON.stringify(data));

      setEntriesFromDB(data);
    }
    loadEntries();
    console.log('EntryList :: useEffect');
  }, []);

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
