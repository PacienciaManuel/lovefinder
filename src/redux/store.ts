import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usuarioSlicer from './usuarioSlicer';
import themeSlicer from './themeSlicer';

export const store = configureStore({
    reducer: {
        usuario: usuarioSlicer,
        thema: themeSlicer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;