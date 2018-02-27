import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { Router } from '@angular/router';
@Injectable()
export class AdminGuard implements CanActivate {

	constructor(private user:UserService, private router:Router){}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
		if (this.user.getUser()) {
			if (this.user.getUser().tipo===0) {
				return this.user.getUserLoggedIn();		
			}else{
				this.router.navigate(['']);
				return false;
			}
		}else{
			this.router.navigate(['']);
			return false;
		}
	}
}
