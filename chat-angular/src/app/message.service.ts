import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

import { Http, Response, Headers, RequestOptions } from "@angular/http";

//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

   private host: string = "http://localhost:3000";    
   private url: string = this.host +"/conversation";

   public headers: Headers;
   public options: RequestOptions;

  constructor(private http: Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
 
  sendMessage(text: String): Promise<String> {       
    const obj = {
      text: text 
    };
    
    return this.http.post(this.url, JSON.stringify(obj), this.options)
            .toPromise()
            .then(response => <String>response.json())
            .catch(this.handleError) 
  } 

  resetChat(): Observable<any> {             
      
    return this.http.get(this.host+"/reset", this.options);
    console.log("2 Enviado comando");
             //.toPromise()
             //.then(response => <String>response.json())
             //.catch(this.handleError) 
  } 


  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); 
      return Promise.reject(error.message || error);
  }


}
