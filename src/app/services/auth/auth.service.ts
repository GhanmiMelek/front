import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap,map,catchError } from 'rxjs/operators';
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
export class AuthService {
 
 
  constructor(private http:HttpClient, private storageservice:StorageService) { }
  apiurl='http://localhost:3000/api/cnrps'
  Register(inputdata:any){
    return this.http.post(this.apiurl+'/auth/register',inputdata)
  }
  registerAdmin(inputdata:any) {
    return this.http.post(this.apiurl+'/auth/registerAdmin',inputdata);
  }
  
  verifyEmail(email: string): Observable<any> {
    const url = `${this.apiurl}/verifyemail?email=${email}`;
    return this.http.get<any>(url);
  }
  Login(inputdata: any) {
    return this.http.post(`${this.apiurl}/auth/login`, inputdata);
  }
  Logout() {
    const headers = new HttpHeaders();
    return this.http.post(`${this.apiurl}/auth/logout`, {}, { headers });
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiurl}/users`);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiurl}/users/${id}`);
  }
  getuserbyid(id: any): Observable<any> {
    return this.http.get(`${this.apiurl}/users/${id}`);
  }
  update(id : any , user : any ): Observable<any> 
  {
   return this.http.put(`${this.apiurl}/users/${id}`,user);
 }
 updateEmail(id : any , user : any ): Observable<any> 
  {
   return this.http.put(`${this.apiurl}/users/updateemail/${id}`,user);
 }
 updatePassword(id : any , user : any ): Observable<any> 
  {
   return this.http.put(`${this.apiurl}/users/updatepassword/${id}`,user);
 }
 updateProfilPicture(id : any , user : any ): Observable<any> 
  {
   return this.http.put(`${this.apiurl}/users/updateprofilpicture/${id}`,user);
 }
 updateadmin(id : any , user : any ): Observable<any> 
  {
   return this.http.put(`${this.apiurl}/users/updateadmin/${id}`,user);
 }
}