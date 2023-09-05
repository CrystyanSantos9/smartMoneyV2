import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Entry} from '../../../types';
import {useNavigation} from '@react-navigation/native';
import Svg, {Circle, Rect} from 'react-native-svg';
import Colors from '../../../styles/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  entry: unknown | Entry;
  isFirstItem: boolean;
  isLastItem: boolean;
  onEntryPress: unknown;
};

const EntryListItem: React.FC<Props> = ({
  entry,
  isFirstItem = false,
  isLastItem = false,
  onEntryPress,
}) => {
  const navigation = useNavigation();

  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;

  const showBulletLine = !(isFirstItem && isLastItem);

  const bulletColor = Colors.white;

  return (
    <TouchableOpacity
      onPress={() => {
        onEntryPress && onEntryPress(entry);
      }}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg height="50" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.background}
              />
            )}
            <Circle
              cx="10"
              cy="25"
              r={8}
              stroke={Colors.background}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.description}</Text>
          <View style={styles.details}>
            <Icon style={styles.entryAtIcon} name="access-time" size={15} />
            <Text style={styles.entryAtText}>{entry.entryAt.toString()}</Text>
            {entry.address && (
              <>
                <Icon style={styles.addressIcon} name="person-pin" size={15} />
                <Text style={styles.addressText}>{entry.address}</Text>
              </>
            )}
          </View>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amountText}>$ {entry.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  bullet: {
    backgroundColor: Colors.yellow,
  },
  description: {
    flex: 1,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
  },
  entryAtIcon: {
    color: Colors.metal,
    marginTop: 2,
    marginRight: 2,
  },
  entryAtText: {
    color: Colors.metal,
    fontSize: 12,
  },
  addressIcon: {
    color: Colors.metal,
    marginTop: 2,
    marginRight: 2,
    marginLeft: 5,
  },
  addressText: {
    color: Colors.metal,
    fontSize: 12,
  },

  amount: {
    backgroundColor: Colors.green,
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default EntryListItem;
