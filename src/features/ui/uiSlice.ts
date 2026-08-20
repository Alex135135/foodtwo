import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
type UiState = { modalOpen: boolean; menuOpen: boolean; activeFormat: string };
const initialState: UiState = { modalOpen: false, menuOpen: false, activeFormat: 'Пицца' };
const uiSlice = createSlice({
  name: 'ui', initialState,
  reducers: {
    openModal: s => { s.modalOpen = true; },
    closeModal: s => { s.modalOpen = false; },
    toggleMenu: s => { s.menuOpen = !s.menuOpen; },
    setFormat: (s, a: PayloadAction<string>) => { s.activeFormat = a.payload; },
  }
});
export const { openModal, closeModal, toggleMenu, setFormat } = uiSlice.actions;
export default uiSlice.reducer;
