import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Theme {
    dark: boolean
}

const initialState:Theme =  {
    dark: false
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDark: function(state, {payload}: PayloadAction<boolean>): Theme {
            return {...state, dark: payload};
        },
    }
});

export const { setDark } = themeSlice.actions;

export const selectDark = (state: RootState) => state.thema.dark;

export default themeSlice.reducer;