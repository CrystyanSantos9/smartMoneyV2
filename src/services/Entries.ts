import {Alert} from 'react-native';

import {getRealm} from '../db/realm';

import {Entry} from '../types';
import EntrySchema from '../db/schemas/EntrySchema';

export const saveEntry = async (value: Entry) => {
  const realm = await getRealm();
  const {amount} = value;

  let data = {};
  try {
    realm.write(() => {
      data = {
        id: 'ABC',
        amount: Number.parseFloat(amount),
        entryAt: new Date(),
        isInit: false,
      };

      realm.create(EntrySchema.name, data, true);
    });
    return data;
  } catch (error) {
    console.error('saveEntry :: error on save object: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento');
  }
};

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects(EntrySchema.name) as unknown as Entry[];

  return entries;
};
