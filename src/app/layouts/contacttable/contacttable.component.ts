import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { contactService } from 'src/app/services/contacts/contact.service';

@Component({
  selector: 'app-contacttable',
  templateUrl: './contacttable.component.html',
  styleUrls: ['./contacttable.component.css']
})
export class ContacttableComponent {
  UsersArray: any[] = [];
  isResultLoaded = false;
  selectedUser: any = {};
  isResolved: boolean = false;
  contacts: any;


  constructor(private http: HttpClient,private service: contactService) {this.getAllUsers();}

  
  getAllUsers() {
    this.service.message()
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.UsersArray = resultData.data;
      });
  }
 
  resolveContact(contactId: any) {
    const user = this.UsersArray.find((u: any) => u.id === contactId);
    if (user) {
      this.service.resolve(contactId, user).subscribe(
        () => {
          // Update the resolved state and button color in your local contacts array
          user.resolved = true;
        },
        error => {
          console.log(error);
          // Handle error if needed
        }
      );
      location.reload(); // reload the page after successful update

    }
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

