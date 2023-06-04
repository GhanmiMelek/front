import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactService } from 'src/app/services/contacts/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('formRef') form: any; // Add a reference to the form
  loading = false; // Flag to track loading state
  sent = false; // Flag to track if the message was successfully sent
  error = false; // Flag to track if there was an error in sending the message
  username!: string; // Variable to store the username input
  email!: string; // Variable to store the email input
  number!: string; // Variable to store the number input
  subject!: string; // Variable to store the subject input
  message!: string; // Variable to store the message input
  
  constructor(private builder: FormBuilder, private http: HttpClient, private service: contactService) {}
  
  send() {
    this.loading = true; // Set loading flag to true
    
    // Call the submitMessage method of the contactService and pass the form data
    this.service.submitMessage({
      username: this.username,
      email: this.email,
      number: this.number,
      subject: this.subject,
      message: this.message
    }).subscribe(
      (response: any) => {
        this.loading = false; // Set loading flag to false
        this.sent = true; // Set sent flag to true
        this.form.reset(); // Reset the form after successful submission
  
        Swal.fire({
          icon: 'success',
          title: 'Le message a été envoyé, merci',
          showConfirmButton: false,
          timer: 1500
        }); // Display success message using Swal library
      },
      (response: any) => {
        this.loading = false; // Set loading flag to false
        this.error = true; // Set error flag to true
  
        Swal.fire({
          icon: 'success',
          title: 'Le message a été envoyé, merci',
          showConfirmButton: false,
          timer: 1500
        }); // Display error message using Swal library
  
        location.reload(); // Reload the page after successful submission
      }
    );
  }
 
}

  