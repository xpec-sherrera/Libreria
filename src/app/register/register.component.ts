import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpTestService} from '../services/test.http.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
	public logged:boolean;
	public info :any;
	public response:any;
	public registerForm: FormGroup;

	constructor(private testService: HttpTestService,private router:Router){}

	ngOnInit(){
		this.registerForm=new FormGroup({
			'documento': new FormControl('',Validators.required),
			'email': new FormControl('',Validators.compose([Validators.required,Validators.email])),
			'emailConfirm': new FormControl('',[Validators.compose([Validators.required,Validators.email])]),
			'nombre': new FormControl('',Validators.required),
			'apellido': new FormControl('',Validators.required),
			'direccion': new FormControl('',Validators.required),
			'contraseña': new FormControl('',Validators.compose([Validators.required,Validators.minLength(8)])),
			'confirmarContraseña': new FormControl('',Validators.compose([Validators.required,Validators.minLength(8)])),
			'checkbox': new FormControl('',Validators.required)
		});
	}

	public registerUser(){
		if (this.registerForm.valid) {
			var data = {
				'documento':this.registerForm.get('documento').value,
				'email':this.registerForm.get('email').value,
				'nombre':this.registerForm.get('nombre').value,
				'apellido':this.registerForm.get('apellido').value,
				'direccion':this.registerForm.get('direccion').value,
				'contraseña':this.registerForm.get('contraseña').value
			}
			this.testService.registerUser(data).subscribe(data => {console.log(this.response = data); this.redirect();}, err => {console.log(err)});
		}else{
			console.log("Formulario inválido.");
		}
	}
	redirect(){
		this.router.navigate(['/']);
	}
	
}
