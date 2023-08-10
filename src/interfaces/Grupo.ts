import RegraGrupo from "./RegraGrupo";

export default interface Grupo {
    id?: string,
    nome: string,
    objectivo: string,
    regras: RegraGrupo[],
    avatar: string | Blob,
    thumbnail: string | Blob,
}