import {RouteProp} from '@react-navigation/native';

export type Entry = {
  key?: string;
  id?: string | null;
  description: string;
  amount: number;
  entryAt?: Date;
  category: Category;
  isInit?: boolean;
};

export type Category = {
  key?: string;
  id?: string | null;
  name: string;
  color?: string;
  isInit?: boolean;
  order?: number;
};

export type RouteParamProps = {entryParam: {entryParam: Entry}};

export type RouteParamPropEntry = RouteProp<RouteParamProps, 'entryParam'>;
