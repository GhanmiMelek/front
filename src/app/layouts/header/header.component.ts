import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { response } from 'express';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private service: AuthService,
    private router: Router,
    private storageService:StorageService) {
      

  }
  isLoggedIn = false;
  iduser ?:number ;
  username?: any;
  Role?:any;
   ngOnInit(): void {

    this.username=sessionStorage.getItem('username')
    this.Role=sessionStorage.getItem('Role')

}

  toggle() {
    const element = document.body as HTMLBodyElement
    element.classList.toggle('toggle-sidebar')
  }
  logout() {
    this.service.Logout().subscribe(
      (response: any) => {
       
        sessionStorage.removeItem('token');
        {
          Swal.fire({
            icon: 'success',
            title: 'Logout Successful',
            showConfirmButton: false,
            timer: 3000
          })
  
        }
        this.router.navigate(['login'])
       
        // navigate to the login page after successful logout
      },
      (error: any) => {
        console.error(error);
        // handle the error response, such as displaying an error message to the user
      }
    );
  }
  profile() {
      
        this.router.navigate(['profile'])
        
  }
 
}
