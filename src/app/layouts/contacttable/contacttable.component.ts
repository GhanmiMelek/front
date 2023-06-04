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
  UsersArray: any[] = []; // Array to store the users
isResultLoaded = false; // Flag to track if the result is loaded
selectedUser: any = {}; // Object to store the selected user
isResolved: boolean = false; // Flag to track if the contact is resolved
contacts: any; // Variable to store the contacts

constructor(private http: HttpClient, private service: contactService) {
  this.getAllUsers(); // Call the method to fetch all users
}

// Method to fetch all users
getAllUsers() {
  this.service.message().subscribe((resultData: any) => {
    this.isResultLoaded = true; // Set result loaded flag to true
    console.log(resultData.data);
    this.UsersArray = resultData.data; // Store the fetched users in the array
  });
}

// Method to resolve a contact
resolveContact(contactId: any) {
  const user = this.UsersArray.find((u: any) => u.id === contactId); // Find the selected user from the UsersArray
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
    location.reload(); // Reload the page after successful update
  }
}

// Method to delete a message
deleteMessage(userId: number) {
  this.service.deletemessage(userId).subscribe(
    (response: any) => {
      Swal.fire({
        icon: 'success',
        title: 'ce compte a été supprimer',
        showConfirmButton: false,
        timer: 1500
      }); // Display success message using Swal library
      this.getAllUsers(); // Fetch all users again after deletion
    },
    (error: HttpErrorResponse) => {
      alert(error.message); // Display error message if any
    }
  );
}

// Method to open Gmail in a new window
openGmail() {
  const gmailUrl = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'; // Gmail URL
  const windowFeatures = 'width=1500,height=600,resizable=yes,top=' + (window.innerHeight / 2 - 300) + ',left=' + (window.innerWidth / 2 - 750);
  window.open(gmailUrl, '_blank', windowFeatures); // Open Gmail in a new window
}

  
  
}

