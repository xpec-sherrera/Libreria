import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	
	books:any;

	constructor(private carrito:CarritoService) { }

	ngOnInit() {
		this.books=this.carrito.getBooks();
	}

}
