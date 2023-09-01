import {RouteProp} from '@react-navigation/native';

export type Entry = {
  key?: string;
  id?: string | null;
  description: string;
  amount: number;
  entryAt?: Date;
  isInit?: boolean;
};

export type RouteParamProps = {entryParam: {entryParam: Entry}};

export type RouteParamPropEntry = RouteProp<RouteParamProps, 'entryParam'>;
