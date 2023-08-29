import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RethinkServiceService } from '../../services/rethink-service.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: any;
  data2: any;
  user: string | undefined;

  ttl:string | undefined;
  cnt:string | undefined;
  upid!:number;

  showblank: boolean = false;
  showblank2: boolean = false;

  ngOnInit(): void {

    const storedValue = localStorage.getItem('user');
    this.user = storedValue as string;
    
    this.service1.getAllPost().subscribe(response => {

      this.data = response;
      
    });

    this.service1.selectedPost(this.user).subscribe({
      next: (response) => {
      
        this.data2 = response;

      },
      error: (error) => {
        console.error(error);
      },
    });

  }

  constructor(private service1: RethinkServiceService, private service2: AuthService, private router: Router) {}

  Post(title: string, content: string){

    const storedValue = localStorage.getItem('user');
    this.user = storedValue as string;

    if (!title || !content ) {

      this.showblank = true;
      return;

    }

    else{

      this.showblank = false;

    }

    if(this.showblank === false){

      this.service1.addPost( this.user, title, content).subscribe({
        next: (response) => {
        },
        error: (error) => {
          console.error(error);
        },
      });

      window.location.reload();

    }

  }

  Update(id: number, title: string, content:string){

    this.upid = id;
    this.ttl =  title;
    this.cnt = content;

  }

  Delete(id: number){

    this.upid = id;
    

  }

  PostUpdate(title: string, content:string){

    if (!title || !content ) {

      this.showblank2 = true;
      return;

    }

    else{

      this.showblank2 = false;

    }

    if(this.showblank === false){

      this.service1.updatePost( this.upid, title, content).subscribe({
        next: (response) => {
          
        },
        error: (error) => {
          console.error(error);
        },
      });

      window.location.reload();

    }

  }

  PostDelete(){

    this.service1.deletePost(this.upid).subscribe({
      next: (response) => {
        
      },
      error: (error) => {
        console.error(error);
      },
    });

    window.location.reload();

  }

  Logout(){
    localStorage.removeItem("user");
    this.service2.logout();
    this.router.navigate(['/login']);
  }





}
