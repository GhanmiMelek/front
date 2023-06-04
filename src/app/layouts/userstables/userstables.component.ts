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
  UsersArray: any[] = []; // Array to store the users
  isResultLoaded = false; // Flag to indicate if the result is loaded
  selectedUser: any = {}; // Variable to store the selected user for update
  showUpdateForm: boolean = false; // Flag to control the visibility of the update form

  constructor(private http: HttpClient, private service: AuthService) {
    this.getAllUsers(); // Call the getAllUsers function to fetch all users on initialization
  }

  getAllUsers() {
    this.service.getAll()
      .subscribe((resultData: any) => {
        this.isResultLoaded = true; // Set the flag to indicate that the result is loaded
        console.log(resultData.data);
        this.UsersArray = resultData.data; // Assign the fetched user data to the UsersArray
      });
  }

  deleteUser(userId: number) {
    this.service.delete(userId)
      .subscribe(
        (response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'ce compte a été supprimer', // Success message for successful deletion
            showConfirmButton: false,
            timer: 1500
          });
          this.getAllUsers(); // Refresh the user list after deletion
        },
        (error: HttpErrorResponse) =>
          alert(error.message)
      );
  }

  cancelUpdate() {
    this.showUpdateForm = false; // Hide the update form
    this.getAllUsers(); // Refresh the user list
  }

  showUpdate(user: any) {
    this.selectedUser = user; // Set the selected user for update
    this.showUpdateForm = true; // Show the update form
  }

  updateAdmin() {
    this.service.updateadmin(this.selectedUser.id, this.selectedUser)
      .subscribe((resultData: any) => {
        Swal.fire({
          icon: 'success',
          title: 'ce compte a été modifié', // Success message for successful update
          showConfirmButton: false,
          timer: 1500
        });
        console.log(resultData);
        this.showUpdateForm = false; // Hide the update form
        this.getAllUsers(); // Refresh the user list
      });
  }



}








  
  

  
  