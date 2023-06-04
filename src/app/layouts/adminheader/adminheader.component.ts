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
    private service: AuthService, // Injecting the AuthService
    private router: Router, // Injecting the Router service
    private storageService: StorageService, // Injecting the StorageService
    private imagesService: ImagesService // Injecting the ImagesService
  ) {}
  
  isLoggedIn = false; // Flag indicating if the user is logged in
  profilePictureUrl: string = "../assets/img/defaultpicture.jpg"; // URL of the profile picture, defaulting to a default image
  currentUser: any = {}; // Object representing the current user
  iduser?: number; // Optional ID of the user
  username?: any; // Optional username of the user
  
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username'); // Retrieve the username from session storage
  
    this.service.getuserbyid(sessionStorage.getItem('userId')).subscribe(
      (response: any) => {
        this.currentUser = response.data[0]; // Get the current user from the response data
        console.log(this.currentUser);
  
        if (this.currentUser.profile_picture) {
          // Check if the current user has a profile picture
          this.imagesService.GetImageByName(this.currentUser.profile_picture).subscribe(
            (response: any) => { // Make a request to the imagesService to get the image by name (profile_picture)
              const reader = new FileReader(); // Create a new instance of FileReader, which is used to read the content of files
              reader.readAsDataURL(response); // Read the response as a data URL (base64 encoded string)
              reader.onloadend = () => { // When the reading operation is completed
              this.profilePictureUrl = reader.result as string; // Save the image URL (data URL) to the profilePictureUrl property
              };
            }
          );
        }
      }
    );
  }
  
  toggle() {
    const element = document.body as HTMLBodyElement;
    element.classList.toggle('toggle-sidebar'); // Toggle the 'toggle-sidebar' class on the body element
  }
  
  logout() {
    this.service.Logout().subscribe(
      (response: any) => {
        sessionStorage.removeItem('token'); // Remove the token from session storage
  
        Swal.fire({
          icon: 'success',
          title: 'Logout Successful',
          showConfirmButton: false,
          timer: 1500
        });
  
        this.router.navigate(['home']); // Navigate to the 'home' route
        console.log('Logged out successfully.');
      },
      (error: any) => {
        console.error(error);
        // Handle the error response, such as displaying an error message to the user
      }
    );
  }
  
  profile() {
    this.router.navigate(['adminprofile']); // Navigate to the 'adminprofile' route
  }
  

  
}

