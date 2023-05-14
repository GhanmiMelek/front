import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
export class User {
  username!: string;
  email!: string;
  password!: string;
  Age!:number;
  Role!:string;
}

@Component({
  selector: 'app-userstables',
  templateUrl: './userstables.component.html',
  styleUrls: ['./userstables.component.css']
})


export class UserstablesComponent {
  UsersArray: any[] = [];
  isResultLoaded = false;
  selectedUser: any = {};
  showUpdateForm: boolean = false;



  constructor(private http: HttpClient,private service: AuthService) {this.getAllUsers();}

  getAllUsers() {
    this.service.getAll()
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.UsersArray = resultData.data;
      });
  }
  deleteUser(userId: number) {
    this.service.delete(userId)
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
      
        // Update the UsersArray to reflect the deletion
        
     
  }
 
  cancelUpdate() {
    this.showUpdateForm = false;
    this.getAllUsers()
  }
  

  showUpdate(user: any) {
    this.selectedUser = user;
    this.showUpdateForm = true;
  }

  updateAdmin() {
    this.service.updateadmin(this.selectedUser.id, this.selectedUser)
      .subscribe((resultData: any) => {
        Swal.fire({
          icon: 'success',
          title: 'ce compte a été modifié',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(resultData);
        this.showUpdateForm = false;
        this.getAllUsers();
      });
  }


}








  
  

  
  