import { Component, OnInit } from '@angular/core';

import { RethinkServiceService } from '../../services/rethink-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showpasserror:boolean = false;
  showblank:boolean = false;

  ngOnInit(): void {


  }

  constructor(private service1: RethinkServiceService) {}

  Register(username:string, email: string, password: string, cpassword: string){


    if(password !== cpassword){

      this.showpasserror = true;
      return;

    }

    else{

      this.showpasserror = false;

    }

    if (!username || !email || !password || !cpassword) {

      console.log('Please fill in all fields.');
      this.showblank = true;
      return;

    }

    else{

      this.showblank = false;

    }

    if(this.showpasserror === false && this.showblank === false){

      this.service1.register(username, email, password).subscribe({
        next: (response) => {
        },
        error: (error) => {
        },
      });

      window.location.reload();

    }

  }


}
