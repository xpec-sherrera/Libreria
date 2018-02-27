export class Book {
	
	public rutaImagen:string;
	public nombre:string;
	public autor:string;
	public editorial:string;
	public precio:string;

	constructor(rutaImagen, nombre, autor, editorial, precio){
		this.rutaImagen=rutaImagen;
		this.nombre=nombre;
		this.autor=autor;
		this.editorial=editorial;
		this.precio=precio;
	}
}
