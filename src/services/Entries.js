import {Alert} from 'react-native';

import {getRealm} from '../db/realm';

export const saveEntry = async () => {
  const realm = await getRealm();
  let data = {};
  try {
    realm.write(() => {
      data = {
        id: 'ABC',
        amount: 12.4,
        entryAt: new Date(),
        isInit: false,
      };
      console.log(data);
      realm.create('Entry', data, true);
    });
    return data;
  } catch (error) {
    console.error('saveEntry :: error on save object: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento');
  }
};
