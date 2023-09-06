import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import Colors from '../../../styles/Color';

type Props = {
  value: string;
  onChangeValue: unknown;
  onChangeDebit: unknown;
};

const NewEntryInput: React.FC<Props> = ({
  value,
  onChangeValue,
  onChangeDebit,
}) => {
  const [debit, setDebit] = useState(value <= 0 ? -1 : 1);
  const [debitPrefix, setDebitPrefix] = useState(value <= 0 ? '-' : '');

  const onChangeDebitCredit = () => {
    if (debit <= 0) {
      setDebit(1);
      setDebitPrefix('');
      onChangeDebit(1);
    } else {
      setDebit(-1);
      setDebitPrefix('-');
      onChangeDebit(-1);
    }

    onChangeValue(prevValues => {
      return {
        ...prevValues,
        amount: value * -1,
      };
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.debitButton}
        onPress={onChangeDebitCredit}>
        <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>
        <Text style={styles.debitButtonText}>R$</Text>
      </TouchableOpacity>

      <TextInputMask
        style={styles.input}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        includeRawValueInChangeText={true}
        value={value}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue &&
            onChangeValue(prevValues => {
              return {
                ...prevValues,
                amount: rawValue * debit,
              };
            });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    flex: 1,

    fontSize: 28,
    color: Colors.white,
    textAlign: 'right',
    paddingLeft: 0,
    paddingRight: 20,
  },
  debitButton: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  debitButtonPrefix: {
    minWidth: 8,
    fontSize: 28,
    color: Colors.white,
  },
  debitButtonText: {
    fontSize: 28,
    color: Colors.white,
  },
});

export default NewEntryInput;
