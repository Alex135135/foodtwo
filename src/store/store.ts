import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '@/features/modal/model/modalSlice';
import mobileMenuReducer from '@/features/mobile-menu/model/mobileMenuSlice';
import businessFormatReducer from '@/features/business-format/model/businessFormatSlice';
import calculatorReducer from '@/features/calculator/model/calculatorSlice';
export const makeStore = () => configureStore({ reducer: { modal: modalReducer, mobileMenu: mobileMenuReducer, businessFormat: businessFormatReducer, calculator: calculatorReducer } });
export type AppStore = ReturnType<typeof makeStore>; export type RootState = ReturnType<AppStore['getState']>; export type AppDispatch = AppStore['dispatch'];