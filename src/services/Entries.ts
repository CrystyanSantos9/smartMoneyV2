import {Alert} from 'react-native';

import {getRealm} from '../db/realm';

import {Entry} from '../types';
import EntrySchema from '../db/schemas/EntrySchema';
import {getUUID} from './UUID';

export const saveEntry = async (value: Entry) => {
  const realm = await getRealm();

  let data = {};

  try {
    realm.write(() => {
      data = {
        id: value.id || getUUID(),
        amount: Number(value.amount),
        entryAt: value.entryAt,
        isInit: false,
        category: value.category,
        description: value.category.name,
      };

      realm.create(EntrySchema.name, data, true);
    });
    return data;
  } catch (error) {
    console.error('saveEntry :: error on save object: ', JSON.stringify(error));
    //  Alert.alert('Erro ao salvar os dados de lançamento');
  }
};

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects(EntrySchema.name) as unknown as Entry[];

  return entries;
};

export const deleteEntry = async value => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(
        realm.objects(EntrySchema.name).filter(entry => entry.id == value.id),
      );
    });
  } catch (err) {
    console.log(err);
    //Alert.alert('Erro ao tentar remover os deste lançamento.');
  }
};
