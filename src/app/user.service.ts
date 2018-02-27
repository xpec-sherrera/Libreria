import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

	private isUserLoggedIn;
	private user;
	private username;
	
	constructor() {
		if (!(sessionStorage.getItem('logged'))) {
			this.isUserLoggedIn=false;
			sessionStorage.removeItem('logged');
		}
		if (sessionStorage.getItem('logged')==='false') {
			sessionStorage.removeItem('user');
		}
	}
	setUserLoggedIn(value){
		this.isUserLoggedIn=value;
		sessionStorage.setItem('logged',String(this.isUserLoggedIn));
	}
	getUserLoggedIn(){
		this.isUserLoggedIn = (sessionStorage.getItem('logged') === 'true');
		return this.isUserLoggedIn;
	}
	setUser(user){
		if (user===null) {
			sessionStorage.removeItem('user');
		}else{
			this.user=user;
			sessionStorage.setItem('user',JSON.stringify(user));
		}
	}
	getUser(){
		this.user=JSON.parse(sessionStorage.getItem('user'));
		return this.user;
	}
}
