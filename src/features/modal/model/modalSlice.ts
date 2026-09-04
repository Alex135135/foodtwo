import { createSlice } from '@reduxjs/toolkit';
const modalSlice = createSlice({ name: 'modal', initialState: { demoOpen: false }, reducers: { openDemo: s => { s.demoOpen = true }, closeDemo: s => { s.demoOpen = false } } });
export const { openDemo, closeDemo } = modalSlice.actions; export default modalSlice.reducer;