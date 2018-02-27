import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class HttpTestService{
	constructor(private _http: Http){

	}
	public registerUser(user: Object){
		return this._http.post('http://localhost:443/api/register', user);
	}
	public registerAutor(autor: Object){
		return this._http.post('http://localhost:443/api/registerautor', autor);
	}
	public loginUser(user: Object){
		return this._http.post('http://localhost:443/api/login', user);
	}
	public registerBook(book: Object){
		return this._http.post('http://localhost:443/api/bookregister', book);
	}
	public getBooks(page: String){
		return this._http.get('http://localhost:443/api/getbooks/'+page);
	}
}