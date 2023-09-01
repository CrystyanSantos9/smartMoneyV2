import {RouteProp, ParamListBase} from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {}
  }
}

export function useRoute<T extends RouteProp>(): T;
