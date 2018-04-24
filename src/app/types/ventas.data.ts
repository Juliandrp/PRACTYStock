import { Equipo } from './equipo.data';
export interface Venta {
    id?:number;
    numfactura:number;
    cedula:number;
    nombrecompleto:string;
    telefono:number;
    barrio:string;
    direccion:string;
    departamento:string;
    ciudad:string;
    equipo:string;
    imei:number;
}