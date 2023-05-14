import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('formRef') form: any; // add a reference to the form
  loading = false;
  sent = false;
  error = false;
  username!: string ;
  email!: string ;
  number!: string ;
  subject!: string ;
  message!: string ;


  constructor(private builder: FormBuilder,private http: HttpClient,private service: AuthService) {}

  send() {
    this.loading = true;
    this.service.submitMessage({
      username: this.username,
      email: this.email,
      number: this.number,
      subject: this.subject,
      message: this.message
    }).subscribe(
      (response: any)  => {
        this.loading = false;
        this.sent = true;
        this.form.reset(); // add this line to reset the form
        Swal.fire({
          icon: 'success',
          title: 'Le message a été envoyé, merci',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (response: any) => {
        this.loading = false;
        this.error = true;
        Swal.fire({
          icon: 'success',
          title: 'Le message a été envoyé, merci',
          showConfirmButton: false,
          timer: 1500
        })
        location.reload(); // reload the page after successful update

      }
    );
  }
 
}

  