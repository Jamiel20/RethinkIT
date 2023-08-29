import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; 

import { AuthGuard } from './auth.guard';
import { LoggedInGuard } from './logged-in.guard';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from './pipes/date.pipe';
import { AgePipe } from './pipes/age.pipe';
import { IsactivePipe } from './pipes/isactive.pipe';
import { TrndtePipe } from './pipes/trndte.pipe';
import { DocnumPipe } from './pipes/docnum.pipe';
import { Date2Pipe } from './pipes/date2.pipe';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
    AgePipe,
    IsactivePipe,
    TrndtePipe,
    DocnumPipe,
    Date2Pipe,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
