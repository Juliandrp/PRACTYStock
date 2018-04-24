export interface Equipo {
    id:number;
    marca:string;
    modelo:string;
    imei:number;
    iccid:string;
    msisdn:string;
    niu:string;
    estado?:string;
    bodega?:string;
}