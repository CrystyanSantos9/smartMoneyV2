import React, {useState} from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Color';

type Props = {};

const NewEntryDatePicker: React.FC<Props> = ({value}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Icon name="today" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default NewEntryDatePicker;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
