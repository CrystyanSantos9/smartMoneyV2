import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
} from 'react-native';

import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../../components/Core/ActionFooter';

import Colors from '../../../styles/Color';
import {
  getDebitCategories,
  getCreditCategories,
} from '../../../services/Categories';

import {Category} from '../../../types';

type Props = {
  debit: number;
  category: Category;
  onChangeCategory: unknown;
};

const NewEntryCategoryPicker: React.FC<Props> = ({
  debit,
  category,
  onChangeCategory,
}) => {
  const [modaVisible, setModalVisible] = useState<boolean>(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      let data;

      if (debit <= 0) {
        data = await getDebitCategories();
      } else {
        data = await getCreditCategories();
      }
      setCategories(data);
    }

    loadCategories();

    console.log('NewEntryCategoryPicker :: useEffect');
  }, [debit]);

  const onCategoryPress = category => {
    onChangeCategory(prevValues => {
      return {
        ...prevValues,
        category: category,
      };
    });
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setModalVisible(true)}>
        <Modal animationType="slide" transparent={false} visible={modaVisible}>
          <View style={styles.modal}>
            <FlatList
              data={categories}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    onCategoryPress(item);
                  }}>
                  <Text style={[styles.modalItemText, {color: item.color}]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <ActionFooter>
              <ActionPrimaryButton title="Fechar" onPress={onClosePress} />
            </ActionFooter>
          </View>
        </Modal>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  pickerButtonText: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalItem: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  modalItemText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
  },
  closeButton: {
    alignSelf: 'center',
    backgroundColor: Colors.background,
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  closeButtonText: {
    fontSize: 14,
    color: Colors.green,
    textAlign: 'center',
  },
});

export default NewEntryCategoryPicker;
