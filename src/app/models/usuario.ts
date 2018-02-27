export class Usuario {
  constructor(
    public id: number,
    public documento: number,
    public nombre: string,
    public apellido:string='',
    public password: string,
    public email:string='',
    public direccion:string=''
  ) {  }
}