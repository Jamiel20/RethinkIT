import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RethinkServiceService {

  constructor(private http: HttpClient) { }


  private checkUrl = 'http://localhost/rethinkdatabase/login.php';

  checkCredentials(email: string, password:string): Observable<any> {
    return this.http.post<any>(this.checkUrl, { em:email, pass:password, query:1 });
  }

  private registerUrl = 'http://localhost/rethinkdatabase/register.php';

  register(username: string,email: string,  password:string): Observable<any> {

    return this.http.post<any>(this.registerUrl, { user:username , em:email,  pass:password, query:1 });
  }
  
  private getUrl = 'http://localhost/rethinkdatabase/selectall.php';

  getAllPost(): Observable<any> {

    return this.http.get<any>(this.getUrl);
    
  }


  addPost(user:string, title:string, content:string): Observable<any> {

    console.log(user);
    return this.http.post<any>(this.registerUrl, { us:user, tl: title, ct: content, query: 2 });


  }

  updatePost(id:number, title:string, content:string): Observable<any> {

    return this.http.post<any>(this.registerUrl, { id:id, tl: title, ct: content, query: 4 });

  }

  deletePost(id:number): Observable<any> {

    return this.http.post<any>(this.registerUrl, { id:id, query: 5 });

  }

  selectedPost(user:string): Observable<any> {

    console.log(user);
    return this.http.post<any>(this.registerUrl, { us:user, query: 3 });


  }


}
