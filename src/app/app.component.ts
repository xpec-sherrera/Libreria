import { Component } from '@angular/core';
import { HttpTestService} from './services/test.http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [HttpTestService]
})

export class AppComponent {
	public info :any;
	constructor(){}
}