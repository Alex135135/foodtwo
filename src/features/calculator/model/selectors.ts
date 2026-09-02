import { createSelector } from '@reduxjs/toolkit'; import type { RootState } from '@/store/store';
import { calculatePrice } from '../lib/calculatePrice';
export const selectCalculator = (state: RootState) => state.calculator;
export const selectCalculatorPrice = createSelector([selectCalculator], calculatePrice);
