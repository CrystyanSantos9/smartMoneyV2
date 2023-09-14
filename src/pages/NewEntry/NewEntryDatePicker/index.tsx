import React, {useState} from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Color';

import DateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
  AndroidNativeProps,
} from '@react-native-community/datetimepicker';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  value: Date;
  onChangeDate: unknown;
};

const NewEntryDatePicker: React.FC<Props> = ({value, onChangeDate}) => {
  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    const currentDate = selectedDate;
    onChangeDate(prevValues => {
      return {
        ...prevValues,
        entryAt: currentDate,
      };
    });
  };

  const showMode = (currentMode: 'date' | 'time') => {
    DateTimePickerAndroid.open({
      value: value,
      onChange,
      mode: currentMode,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={showDatepicker}>
        <Icon name="today" size={30} color={Colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
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
