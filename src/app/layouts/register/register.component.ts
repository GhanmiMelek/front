import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router) {
    sessionStorage.clear(); // Clear any existing session storage data
  }
  
  users: any[] = []; // Array to store users (not used in the provided code)
  
  registerform = this.builder.group({
    username: this.builder.control('', Validators.required), // Form control for username field, required validator
    email: this.builder.control('', [Validators.required, Validators.email]), // Form control for email field, required and email validators
    password: this.builder.control('', Validators.required), // Form control for password field, required validator
    Age: this.builder.control('', Validators.required) // Form control for Age field, required validator
  });
  
  proceedregister() {
    if (this.registerform.valid) { // Check if the form is valid
      this.service.Register(this.registerform.value).subscribe(
        (response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'e-mail de vérification a été envoyé avec succès', // Success message
            showConfirmButton: false,
            timer: 4000
          });
  
          // Store user data in session storage
          sessionStorage.setItem('token', response.accessToken);
          sessionStorage.setItem('userId', response.data.userId);
          sessionStorage.setItem('email', response.data.email);
          sessionStorage.setItem('username', response.data.username);
          sessionStorage.setItem('Age', response.data.Age);
          sessionStorage.setItem('Role', response.data.Role);
  
          this.router.navigate(['/verifyemail']); // Navigate to the verifyemail page
        },
        (error: any) => {
          console.error(error);
          console.log('check your information.'); // Log error message
          // handle the error response, such as displaying an error message to the user
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Veuillez entrer des données valides', // Error message for invalid form
        showConfirmButton: false,
        timer: 2500
      });
    }
  }
  
}
