import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
type CalcState = { locations: number; orders: number; app: boolean; loyalty: boolean };
const initialState: CalcState = { locations: 3, orders: 1200, app: true, loyalty: true };
const slice = createSlice({
  name: 'calculator', initialState,
  reducers: {
    setLocations: (s, a: PayloadAction<number>) => { s.locations = a.payload; },
    setOrders: (s, a: PayloadAction<number>) => { s.orders = a.payload; },
    toggleApp: s => { s.app = !s.app; },
    toggleLoyalty: s => { s.loyalty = !s.loyalty; },
  }
});
export const { setLocations, setOrders, toggleApp, toggleLoyalty } = slice.actions;
export default slice.reducer;
