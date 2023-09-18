import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {ReactElement, ReactPortal} from 'react';
import Colors from '../../../styles/Color';

type Props = {
  children: any;
  title: string;
  onPress: () => void;
};

type childrenWithoutProps = Omit<Props, 'title' | 'onPress'>;
type propsWithoutChildren = Omit<Props, 'children'>;

const ActionFooter: React.FC<childrenWithoutProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export default ActionFooter;

export const ActionPrimaryButton: React.FC<propsWithoutChildren> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryButton: React.FC<propsWithoutChildren> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingVertical: 10,
  },
  primaryButton: {
    borderRadius: 150,
    borderWidth: 1,
    borderColor: Colors.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  primaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.green,
  },
  secondaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
