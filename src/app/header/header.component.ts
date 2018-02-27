import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpTestService} from '../services/test.http.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgModule } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Book } from '../book';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerImagePath: string;
  public loginForm: FormGroup;
  public response:any;
  public loginModal:any;
  public description:string;
  public search:string='';
  constructor(private testService: HttpTestService, private router:Router, private user:UserService, private carrito:CarritoService) {
  	this.headerImagePath='/assets/images/headerlogo.png';
  }

  ngOnInit() {
    this.loginForm=new FormGroup({
      'email': new FormControl('',Validators.compose([Validators.required,Validators.email])),
      'contraseña': new FormControl('',Validators.compose([Validators.required,Validators.minLength(8)]))
    });
  }

  loginUser(){
    if (this.loginForm.valid) {
      var data = {
        'email':this.loginForm.get('email').value,
        'contraseña':this.loginForm.get('contraseña').value
      }
      this.testService.loginUser(data).subscribe(data => {this.checkLogin(this.response = data);}, err => {console.log(err)});
    }else{
      console.log("Formulario inválido.");
    }
  }  

  checkLogin(response){
    response=JSON.parse(response._body);
    if (response.state==="successful") {
      $('#exampleModal').modal('hide');
      this.user.setUserLoggedIn(true);
      this.user.setUser(response.usuario);
      console.log('Login successful');
      console.log(this.user.getUser().id);
      if (this.user.getUser().tipo===1) {
        setTimeout(()=>{ this.router.navigate([('users/'+this.user.getUser().id)]); }, 500);
      }else{
        setTimeout(()=>{ this.router.navigate(['dashboard']); }, 500);
      }
    }else{
      this.description=response.description;
    }
    console.log(response);
  }

  logout(){
    sessionStorage.clear();
  }

  searchData(ev){
    console.log(ev.target.value);
  }
}