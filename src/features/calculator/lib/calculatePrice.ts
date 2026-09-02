import type { CalculatorState } from '../model/types';
export const calculatePrice = ({ locations, app, loyalty }: CalculatorState) => 24900 + locations * 2900 + (app ? 12000 : 0) + (loyalty ? 6900 : 0);
