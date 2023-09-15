import React from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Color';
import {Entry} from '../../../types';

type Props = {
  onOkPress: () => void;
  entry: Entry;
};

export default function NewEntryDeleteAction({entry, onOkPress}: Props) {
  const onDelete = () => {
    Alert.alert(
      'Apagar?',
      'Você deseja realmente apagar este lançamento?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => onOkPress()},
      ],
      {cancelable: false},
    );
  };

  return (
    entry?.id && (
      <View>
        <TouchableOpacity style={styles.button} onPress={onDelete}>
          <Icon name="delete" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.red,
    width: 59,
    height: 59,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});
