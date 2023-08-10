import { Usuario } from "./Usuario";

export default interface Amizade {
    id?:string,
    solicitado: Usuario,
    solicitante: Usuario,
    confirmado: boolean,
    dataSolitacao: string | Date,
    dataConfirmacao: string | Date,
}