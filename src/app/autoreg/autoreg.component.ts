import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpTestService} from '../services/test.http.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-autoreg',
	templateUrl: './autoreg.component.html',
	styleUrls: ['./autoreg.component.css']
})
export class AutoregComponent implements OnInit {
	public autorForm: FormGroup;
	public response: any;
	constructor(private testService: HttpTestService, private router:Router) { }

	ngOnInit() {
		this.autorForm=new FormGroup({
			'edad': new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]*$')])),
			'nacionalidad': new FormControl('',Validators.required),
			'nombre': new FormControl('',Validators.required),
			'apellido': new FormControl('',Validators.required),
		});
	}
	registerAutor(){
		if (this.autorForm.valid) {
			var data = {
				'edad':this.autorForm.get('edad').value,
				'nacionalidad':this.autorForm.get('nacionalidad').value,
				'nombre':this.autorForm.get('nombre').value,
				'apellido':this.autorForm.get('apellido').value
			}
			this.testService.registerAutor(data).subscribe(data => {console.log(this.response = data); this.redirect();}, err => {console.log(err)});
		}else{
			console.log("Formulario inválido.");
		}
	}
	redirect(){
		window.location.reload();
	}
}
