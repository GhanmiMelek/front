import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacttable',
  templateUrl: './contacttable.component.html',
  styleUrls: ['./contacttable.component.css']
})
export class ContacttableComponent {
  UsersArray: any[] = [];
  isResultLoaded = false;
  selectedUser: any = {};
  constructor(private http: HttpClient,private service: AuthService) {this.getAllUsers();}

  getAllUsers() {
    this.service.message()
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.UsersArray = resultData.data;
      });
  }
  deleteMessage(userId: number) {
    this.service.deletemessage(userId)
      .subscribe(
        (response: any) => 
        {
          Swal.fire({
            icon: 'success',
            title: 'ce compte a été supprimer',
            showConfirmButton: false,
            timer: 1500
          })
          this.getAllUsers()
        },(error: HttpErrorResponse) =>
        alert(error.message)
    );
      
     
  }
 
  

}
