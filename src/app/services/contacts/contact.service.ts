import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { service } from 'powerbi-client';
import { StorageService } from '../storage/storage.service';


export class User {
  username!: string;
  email!: string;
  password!: string;
  Age!:number;
  Role!:string;
}
export class contact {
  username!: string;
  email!: string;
  number!: string;
  subject!:string;
  message!:string;
}
@Injectable({
  providedIn: 'root'
})
export class contactService {
 
 
  constructor(private http:HttpClient, private storageservice:StorageService) { }
  apiurl='http://localhost:3000/api/cnrps'
 
  message(): Observable<any> {
   return this.http.get(`${this.apiurl}/contact`);
  }
  deletemessage(id: any): Observable<any> {
   return this.http.delete(`${this.apiurl}/contact/delete/${id}`);
  }
  submitMessage(contact:contact) {
   return this.http.post(`${this.apiurl}/contact`,contact);
  }
  resolve(id: any, contact:contact ): Observable<any> {
    return this.http.put(`${this.apiurl}/contact/resolve/${id}`,contact);
  }
}