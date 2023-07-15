import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mobile } from './mobile';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class MobileService {
private baseURL="http://localhost:9191/api/v1/mobiles";  
private baseURL1="http://localhost:9191/api/v1/bookings";
// property for defining a base url of all rest apis
  constructor(private httpClient:HttpClient) { }  
  
  getBookList():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL1}`);
  }
  
  
  //to make a rest api call we use httpClient
  getMobilesList():Observable<Mobile[]>{                    // observable is imported from rxjs
    return this.httpClient.get<Mobile[]>(`${this.baseURL}`);

  }

  addMobile(mobile:Mobile):Observable<Object>{              //observable is a class provided by RxJs by using this we can handle emitted values
    return this.httpClient.post(`${this.baseURL}`,mobile);  // Object is used to work with specific properties and methods
  }
  updateMobile(id:number,mobile:Mobile):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,mobile);

  }
  getMobileById(id:number):Observable<Mobile>{
    return this.httpClient.get<Mobile>(`${this.baseURL}/${id}`);
  }
  deleteMobile(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


addCustomer(book:Book):Observable<Object>{
return this.httpClient.post(`${this.baseURL1}`,book);
}



}
