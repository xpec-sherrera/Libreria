import { Injectable} from '@angular/core';
import { Book } from './book';
import { UserService } from './user.service';
@Injectable()
export class CarritoService{

	public books;
	public book:Book;
	public ggvar:any;

	constructor(private userService:UserService) {
	}
	addBook(book){
		console.log(this.books);
		if (sessionStorage.getItem('books')) {
			this.books=JSON.parse(sessionStorage.getItem('books'));
			
			let found:boolean;

			for (var i = 0; i < this.books.length; i++) {
				if (this.books[i].id===book.id) {
					found=true;
					console.log(this.books[i].cantidad);
					this.books[i].cantidad=this.books[i].cantidad+1;
					sessionStorage.setItem('books',JSON.stringify(this.books));		
				}
			}
			if (!found) {
				this.books.push(book);
				this.books[this.books.length-1].cantidad=1;
				sessionStorage.setItem('books',JSON.stringify(this.books));	
			}
		}else{
			if (this.books) {
				this.books.push(book);
				this.books[this.books.length-1].cantidad=1;
				sessionStorage.setItem('books',JSON.stringify(this.books));
			}else{
				this.books=Array<Book>();
				this.books.push(book);
				this.books[this.books.length-1].cantidad=1;
				sessionStorage.setItem('books',JSON.stringify(this.books));
			}	
		}
	}
	getBooks(){
		return JSON.parse(sessionStorage.getItem('books'));
	}
	vaciar(){
		sessionStorage.removeItem('books');
	}
	length(){
		if (sessionStorage.getItem('books')) {
			return JSON.parse(sessionStorage.getItem('books')).length;	
		}else{
			return 0;
		}
		
	}
}
