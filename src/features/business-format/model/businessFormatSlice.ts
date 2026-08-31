import { createSlice, type PayloadAction } from '@reduxjs/toolkit'; import type { BusinessFormat } from './types';
const initialState: { active: BusinessFormat } = { active: 'pizza' };
const slice = createSlice({ name: 'businessFormat', initialState, reducers: { setBusinessFormat: (s, a: PayloadAction<BusinessFormat>) => { s.active = a.payload } } });
export const { setBusinessFormat } = slice.actions; export default slice.reducer;
