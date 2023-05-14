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
  constructor(private builder: FormBuilder,
    private service: AuthService,
    private router: Router) {
      sessionStorage.clear();

  }
  users: any[] = [];

  registerform = this.builder.group({
    username: this.builder.control('', Validators.required),
    email: this.builder.control('', [Validators.required, Validators.email]),
    password: this.builder.control('', Validators.required),
    Age: this.builder.control('', Validators.required)
  });

  
  proceedregister() {
    if (this.registerform.valid) {
      this.service.Register(this.registerform.value).subscribe(
        (response: any) => {
          {
            Swal.fire({
              icon: 'success',
              title: 'Inscription réussie',
              showConfirmButton: false,
              timer: 1000
            })
    
          }
          sessionStorage.setItem('token', response.accessToken)
          sessionStorage.setItem('userId', response.data.userId)
          sessionStorage.setItem('email', response.data.email)
          sessionStorage.setItem('username',response.data.username)
          sessionStorage.setItem('Age',response.data.Age)
          sessionStorage.setItem('Role', response.data.Role)

          this.router.navigate(['dashbord'])
        },
        (error: any) => {
          console.error(error)
          console.log('check your information.')
          // handle the error response, such as displaying an error message to the user
        }
      );
    } else {
      {
        Swal.fire({
          icon: 'error',
          title: 'Veuillez entrer des données valides',
          showConfirmButton: false,
          timer: 1000
          
        })

      }
     
    }
  }
  
}
