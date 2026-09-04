import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({ name: 'mobileMenu', initialState: { isOpen: false }, reducers: { toggleMenu: s => { s.isOpen = !s.isOpen }, closeMenu: s => { s.isOpen = false } } });
export const { toggleMenu, closeMenu } = slice.actions; export default slice.reducer;
