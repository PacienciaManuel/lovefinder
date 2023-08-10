import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Usuario } from '@/interfaces/Usuario';

const initialState:Usuario =  {
    nome: 'Manuel Isaac',
    genero: 'Masculino',
    dataNascimento: '22/06/1998',
    email: 'manuelisaacialberto@gmail.com',
    senha: '',
    fotoPerfil: '171212972_1128171794369904_7211601078442101786_n.jpg'
};

export const usuarioSlice = createSlice({
    name: 'usuario',
    // initialState:  {} as Usuario,
    initialState,
    reducers: {
        setUsuario: function(state, {payload}: PayloadAction<Usuario>): Usuario {
            return payload;
        },
        changeNome: function(state, {payload}: PayloadAction<string>): Usuario {
            return {...state, nome: payload};
        },
    }
});

export const { setUsuario, changeNome } = usuarioSlice.actions;

export const selectUsuario = (state: RootState) => state.usuario;

export default usuarioSlice.reducer;