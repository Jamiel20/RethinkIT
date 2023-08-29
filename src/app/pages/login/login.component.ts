import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RethinkServiceService } from '../../services/rethink-service.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {

    const user = localStorage.getItem('user');

    if (user !== null) {
      this.Autolog();
    }

  }

  constructor(private service1: RethinkServiceService, private service2: AuthService, private router: Router) {}

  Autolog(){

    if (this.service2.login()) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }

  }

  LogIn(email: string, password: string){

    this.service1.checkCredentials(email, password).subscribe({
      next: (response) => {

        if (Array.isArray(response)) {

          console.log(response);

          localStorage.setItem('user', response[0].username);

          if (this.service2.login()) {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/login']);
          }
          
        }

      },
      error: (error) => {
        console.error(error);
      },
    });

  }

}
