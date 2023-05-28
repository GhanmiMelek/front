import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import Swal from 'sweetalert2';
import { ImagesService } from 'src/app/services/images/images.service';
@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent {
 
  constructor(
    private service: AuthService,
    private router: Router,
    private storageService:StorageService,
    private imagesService:ImagesService) {
      
  }

  isLoggedIn = false;
  profilePictureUrl:string = "../assets/img/defaultpicture.jpg"
  currentUser: any ={}
  iduser ?:number ;
  username?: any;
  
 
   ngOnInit(): void {

    this.username=sessionStorage.getItem('username')
    this.service.getuserbyid(sessionStorage.getItem('userId'))
    .subscribe(
      (response:any)=>{
        this.currentUser=response.data[0]
        console.log(this.currentUser)
        if (this.currentUser.profile_picture){
          this.imagesService.GetImageByName(this.currentUser.profile_picture)
          .subscribe(
            (response:any) => {
              const reader = new FileReader();
              reader.readAsDataURL(response);
              reader.onloadend = () => {
                this.profilePictureUrl = reader.result as string; // save the image URL to a property on the post object
              };
            }
          )
        }
        
      }
    )
    
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
            timer: 1500
          })
  
        }
        this.router.navigate(['home'])
        console.log('Logged out successfully.' );
        // navigate to the login page after successful logout
      },
      (error: any) => {
        console.error(error);
        // handle the error response, such as displaying an error message to the user
      }
    );
  }
  profile() {
      
        this.router.navigate(['adminprofile'])
        
  }

  
}

