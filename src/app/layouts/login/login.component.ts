import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router) {
    sessionStorage.clear();
  }
  // Constructor for the component, injecting FormBuilder, AuthService, and Router dependencies. It clears the session storage when the component is initialized.
  
  users: any[] = [];
  // Declare an empty array to store user data
  
  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });
  // Define a form group using the FormBuilder to create a login form with email and password fields
  
  proceedlogin() {
    if (this.loginform.valid) {
      // Check if the login form is valid
  
      this.service.Login(this.loginform.value).subscribe(
        (response: any) => {
          // Call the Login method of the AuthService and subscribe to the response
  
          sessionStorage.setItem('token', response.accessToken);
          sessionStorage.setItem('userId', response.data.userId);
          sessionStorage.setItem('email', response.data.email);
          sessionStorage.setItem('username', response.data.username);
          sessionStorage.setItem('Role', response.data.Role);
          // Store user data in session storage
  
          if (response.data.Role == 'USER') {
            Swal.fire({
              icon: 'success',
              title: 'Connexion réussie',
              showConfirmButton: false,
              timer: 1000
            });
            // Show a success notification for successful user login
  
            this.router.navigate(['dashbord']);
            // Navigate to the dashboard after successful login for a regular user
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Connexion réussie',
              showConfirmButton: false,
              timer: 1500
            });
            // Show a success notification for successful admin login
  
            this.router.navigate(['admindash']);
            // Navigate to the admin dashboard after successful login for an admin user
          }
        },
        (error: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Email ou mot de passe incorrect.',
            showConfirmButton: false,
            timer: 1000
          });
          // Show an error notification for invalid email or password
  
          // handle the error response, such as displaying an error message to the user
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Veuillez entrer des données valides',
        showConfirmButton: false,
        timer: 1000
      });
      // Show an error notification for invalid form data
    }
  }
  

}
