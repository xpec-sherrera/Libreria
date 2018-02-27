import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './home/maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';
import { CarritoService } from './carrito.service';
import { AuthguardGuard } from './authguard.guard';
import { AdminGuard } from './admin.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BookregComponent } from './bookreg/bookreg.component';
import { AutoregComponent } from './autoreg/autoreg.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
{ path: '',component: HomeComponent, pathMatch: 'full'},
{ path: 'register',component: RegisterComponent },
{ path: 'users/:id',canActivate: [AuthguardGuard],component: DashboardComponent},
{ path: 'dashboard',canActivate: [AdminGuard],component: AdmindashboardComponent},
{ path: 'dashboard/addBook',canActivate: [AdminGuard],component: BookregComponent},
{ path: 'dashboard/addAutor',canActivate: [AdminGuard],component: AutoregComponent},
{ path: 'checkout/cart',component: CartComponent}
]

@NgModule({
	declarations: [
	AppComponent,
	HeaderComponent,
	MaincontentComponent,
	FooterComponent,
	HomeComponent,
	RegisterComponent,
	DashboardComponent,
	AdmindashboardComponent,
	BookregComponent,
	AutoregComponent,
	CartComponent
	],
	imports: [
	RouterModule.forRoot(appRoutes),
	HttpModule,
	BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	NgbModule.forRoot()
	],
	exports: [RouterModule],
	providers: [UserService,AuthguardGuard,AdminGuard,CarritoService],
	bootstrap: [AppComponent]
})

export class AppModule { }