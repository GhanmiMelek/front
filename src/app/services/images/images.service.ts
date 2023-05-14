import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap,map,catchError } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { service } from 'powerbi-client';
import { StorageService } from '../storage/storage.service';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http:HttpClient, private storageservice:StorageService) { }
  apiurl='http://localhost:3000/api/cnrps'

  
  GetImageByName(name: any): Observable<Blob> {
    return this.http.get(`${this.apiurl}/upload/${name}`, { responseType: 'blob' });
  }

  UploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<any>(`${this.apiurl}/profile`, formData);
  }
}
