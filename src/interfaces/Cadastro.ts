import Genero from "./Genero";

export interface Cadastro {
    nome: string,
    apelido: string,
    genero: Genero,
    dataNascimento: string | Date,
    email: string,
    senha: string,
    confirmacaoSenha: string,
}