import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpTestService} from '../services/test.http.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;
@Component({
	selector: 'app-bookreg',
	templateUrl: './bookreg.component.html',
	styleUrls: ['./bookreg.component.css']
})
export class BookregComponent implements OnInit {
	
	public bookForm: FormGroup;
	public response:any;

	constructor(private testService: HttpTestService,private router:Router) { }

	ngOnInit() {
		this.bookForm=new FormGroup({
			'nombre': new FormControl('',Validators.required),
			'genero': new FormControl('',Validators.required),
			'editorial': new FormControl('',Validators.required),
			'autor': new FormControl('',Validators.required),
			'paginas': new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]*$')])),
			'cantidad': new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]*$')])),
			'idioma': new FormControl('',Validators.required),
			'presentacion': new FormControl('',Validators.required),
			'precio': new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]*$')])),
			'descripcion': new FormControl('',Validators.required)
		});
	}
	registerBook(){
		if (this.bookForm.valid) {
			var data = {
				'nombre':this.bookForm.get('nombre').value,
				'genero':this.bookForm.get('genero').value,
				'editorial':this.bookForm.get('editorial').value,
				'autor':this.bookForm.get('autor').value,
				'paginas':this.bookForm.get('paginas').value,
				'cantidad':this.bookForm.get('cantidad').value,
				'idioma':this.bookForm.get('idioma').value,
				'presentacion':this.bookForm.get('presentacion').value,
				'rutaImagen':$("#file-upload").val().split('\\')[2],
				'precio':this.bookForm.get('precio').value,
				'descripcion':this.bookForm.get('descripcion').value
			}
			this.testService.registerBook(data).subscribe(data => {console.log(this.response = data); this.redirect();}, err => {console.log(err)});
		}else{
			console.log("Formulario inválido.");
			console.log(this.bookForm.get('nombre').value,
				this.bookForm.get('genero').value,
				this.bookForm.get('editorial').value,
				this.bookForm.get('autor').value,
				this.bookForm.get('paginas').value,
				this.bookForm.get('cantidad').value,
				this.bookForm.get('idioma').value,
				this.bookForm.get('presentacion').value,
				this.bookForm.get('precio').value,
				this.bookForm.get('descripcion').value);
		}
	}
	redirect(){
		//window.location.reload();
	}
}
