import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { response } from 'express';
import Swal from 'sweetalert2';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private service: AuthService,
    private router: Router,
    private storageService: StorageService,
    private imagesService: ImagesService
  ) {}
  
  isLoggedIn = false; // Flag to track if the user is logged in
  profilePictureUrl: string = "../assets/img/defaultpicture.jpg"; // URL for the profile picture
  currentUser: any = {}; // Object to store the current user's information
  iduser?: number; // ID of the user
  username?: any; // Username of the user
  Role?: any; // Role of the user
  
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username'); // Get the username from session storage
    this.Role = sessionStorage.getItem('Role'); // Get the role from session storage
  
    // Get the current user's information
    this.service.getuserbyid(sessionStorage.getItem('userId')).subscribe(
      (response: any) => {
        this.currentUser = response.data[0]; // Store the current user's information
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
        sessionStorage.removeItem('token');
        Swal.fire({
          icon: 'success',
          title: 'Logout Successful',
          showConfirmButton: false,
          timer: 3000
        }); // Display success message using Swal library
  
        this.router.navigate(['home']); // Navigate to the home page after successful logout
      },
      (error: any) => {
        console.error(error);
        // Handle the error response, such as displaying an error message to the user
      }
    );
  }
  
  profile() {
    this.router.navigate(['profile']); // Navigate to the profile page
  }
  
 
}
