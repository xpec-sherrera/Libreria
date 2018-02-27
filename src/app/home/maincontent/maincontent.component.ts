import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpTestService} from '../../services/test.http.service';
import { CarritoService } from '../../carrito.service';
import { Book } from '../../book';

@Component({
	selector: 'app-maincontent',
	templateUrl: './maincontent.component.html',
	styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
	response: any;
	ready:boolean=false;
	constructor(private testService: HttpTestService, private router:Router, private carrito:CarritoService) { }

	ngOnInit() {
		this.testService.getBooks('home').subscribe(data => {this.doSomething(this.response = data);}, err => {console.log(err)});
	}
	doSomething(response){
		console.log(response);
		try{
			this.response=JSON.parse(response._body);
			this.ready=true;
		}catch(Error){
			console.log(Error.message);
		}	
	}
	addBook(book){
		this.carrito.addBook(book);
	}
}
