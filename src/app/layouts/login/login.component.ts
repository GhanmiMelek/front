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
  constructor(private builder: FormBuilder,
    private service: AuthService,
    private router: Router) {
      sessionStorage.clear();

  }
  users: any[] = [];

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  
  proceedlogin() {
    if (this.loginform.valid) {
      this.service.Login(this.loginform.value).subscribe(
        (response: any) => {
          
          sessionStorage.setItem('token', response.accessToken)
          sessionStorage.setItem('userId', response.data.userId)
          sessionStorage.setItem('email', response.data.email)
          sessionStorage.setItem('username',response.data.username)
          sessionStorage.setItem('Role',response.data.Role)
          if (response.data.Role == 'USER'){
            {
              Swal.fire({
                icon: 'success',
                title: 'Connexion réussie',
                showConfirmButton: false,
                timer: 1000
              })
      
            }
            // navigate to dashboard after setting token
            this.router.navigate(['dashbord'])
          }
          else{
            {
              Swal.fire({
                icon: 'success',
                title: 'Connexion réussie',
                showConfirmButton: false,
                timer: 1500
              })
      
            }
            // navigate to dashboard after setting token
            this.router.navigate(['admindash'])
          }
          
           
        },
        (error: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Email ou mot de passe incorrect.',
            showConfirmButton: false,
            timer: 1000
            
          })
          // handle the error response, such as displaying an error message to the user
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Veuillez entrer des données valides',
        showConfirmButton: false,
        timer: 1000
        
      })
    }
  }

}
