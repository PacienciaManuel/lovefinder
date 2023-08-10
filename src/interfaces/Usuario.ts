import Genero from "./Genero";

export interface Usuario {
    id?: number,
    nome: string,
    genero: Genero,
    dataNascimento: string | Date,
    email: string,
    senha: string,
    fotoPerfil: string,
}