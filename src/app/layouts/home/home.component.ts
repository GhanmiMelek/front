import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactService } from 'src/app/services/contacts/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('formRef') form: any; // Add a reference to the form element with the template variable 'formRef'

loading = false; // Initialize a boolean variable to track the loading state of the form submission

sent = false; // Initialize a boolean variable to track whether the message was successfully sent

error = false; // Initialize a boolean variable to track whether an error occurred during message submission

username!: string;
email!: string;
number!: string;
subject!: string;
message!: string;
// Declare variables for the form fields: username, email, number, subject, and message

constructor(private builder: FormBuilder, private http: HttpClient, private service: contactService) {}
// Constructor for the component, injecting FormBuilder, HttpClient, and contactService dependencies

send() {
  this.loading = true; // Set the loading state to true to indicate that the form submission is in progress

  this.service.submitMessage({
    username: this.username,
    email: this.email,
    number: this.number,
    subject: this.subject,
    message: this.message
  }).subscribe(
    (response: any) => {
      this.loading = false;
      // Set the loading state to false when the response is received

      this.sent = true;
      // Set the sent state to true to indicate that the message was successfully sent

      this.form.reset();
      // Reset the form to its initial state

      Swal.fire({
        icon: 'success',
        title: 'Le message a été envoyé, merci',
        showConfirmButton: false,
        timer: 1500
      });
      // Show a success notification to the user

    },
    (response: any) => {
      this.loading = false;
      // Set the loading state to false when an error response is received

      this.error = true;
      // Set the error state to true to indicate that an error occurred during message submission

      Swal.fire({
        icon: 'success',
        title: 'Le message a été envoyé, merci',
        showConfirmButton: false,
        timer: 1500
      });
      // Show a success notification to the user

      location.reload();
      // Reload the page after a successful update
    }
  );
}
 
}
