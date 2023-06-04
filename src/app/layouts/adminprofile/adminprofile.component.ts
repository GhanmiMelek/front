import { Component } from '@angular/core';
import { HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImagesService } from 'src/app/services/images/images.service';

export class User {
  id!: number;
  username!: string;
  email!:string;
  password!: string;
  profile_picture!: string;

 }
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {
  public edituser: User = new User(); // Object representing the user being edited
  public imageUrl!: string; // URL of the image
  
  isLoggedIn = false; // Flag indicating if the user is logged in
  id!: number; // ID of the user
  password: string = ""; // User's password
  message = ""; // Message string
  profile_picture!: string; // URL of the profile picture
  fileInfos?: Observable<any>; // Observable representing file information
  
  selectedFiles: File[] = []; // Array of selected files
  profilePictureUrl: string = "assets/img/defaultpicture.jpg"; // URL of the profile picture, defaulting to a default image
  currentUser: any = {}; // Object representing the current user
  username?: any; // Optional username of the user
  email?: any; // Optional email of the user
  
  constructor(
    private router: Router, // Injecting the Router service
    private storageService: StorageService, // Injecting the StorageService
    private service: AuthService, // Injecting the AuthService
    private fb: FormBuilder, // Injecting the FormBuilder
    private imagesService: ImagesService // Injecting the ImagesService
  ) {}
  
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username'); // Retrieve the username from session storage
    this.email = sessionStorage.getItem('email'); // Retrieve the email from session storage
  
    // Check if the user is logged in
    this.isLoggedIn = this.storageService.isLoggedIn();
  
    if (this.isLoggedIn) {
      // If the user is logged in, retrieve the user object from storage
      const user = this.storageService.getUser();
      // Set the user's ID in the edituser object
      this.edituser.id = user.id;
      console.log(this.edituser.id);
    
      // Fetch user details using the user's ID
      this.service.getuserbyid(user.id).subscribe({
        next: (data) => {
          console.log("ce user est ", data);
    
          // Update the edituser object with the fetched user details
          this.edituser.id = data.id;
          this.edituser.username = data.username;
          this.edituser.email = data.email;
          this.edituser.password = data.password;
          this.edituser.profile_picture = data.profile_picture;
        },
        error: (err) => {
          console.log(err);
        }
      });
    
      // Set the current user's details
      this.id = user.id;
      this.username = user.username;
      this.email = user.email;
      this.password = user.password;
    } else {
      // If the user is not logged in, navigate to the adminprofile page
      this.router.navigate(['/adminprofile']);
    }
    
    // Fetch the current user's details using their user ID
    this.service.getuserbyid(sessionStorage.getItem('userId')).subscribe(
      (response: any) => {
        this.currentUser = response.data[0];
        console.log(this.currentUser);
  
        if (this.currentUser.profile_picture) {
          // If the current user has a profile picture, fetch it
          this.imagesService.GetImageByName(this.currentUser.profile_picture).subscribe(
            (response: any) => {
              const reader = new FileReader();
              reader.readAsDataURL(response);
              reader.onloadend = () => {
                // Save the image URL to the profilePictureUrl property
                this.profilePictureUrl = reader.result as string;
              };
            }
          );
        }
      }
    );
  }
  
      // Handle file selection for profile picture update
    onSelectFile(event: any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = () => {
          // Update the profilePictureUrl with the selected image URL
          this.profilePictureUrl = reader.result as string;
        };
        const files: File[] = event.target.files;
        this.selectedFiles = files;
      }
    }
  
  // Update the profile picture
changeProfilePic() {
  if (this.selectedFiles.length > 0) {
    const file = this.selectedFiles[0];

    // Upload the selected image file
    this.imagesService.UploadImage(file).subscribe(
      (response: any) => {
        const url = response.image;
        const fileName = url.substring(url.lastIndexOf("/") + 1);
        console.log(fileName);

        const data = {
          profile_picture: fileName
        };

        // Display success message for profile picture update
        Swal.fire({
          icon: 'success',
          title: 'Votre photo a été mise à jour',
          showConfirmButton: false,
          timer: 1500
        });
  
          // Update the profile picture in the backend
        this.service.updateProfilPicture(sessionStorage.getItem('userId'), data).subscribe(
          (response: any) => {
            console.log(response.message);

            // Display success message for backend update
            Swal.fire({
              icon: 'success',
              title: 'Votre photo a été mise à jour',
              showConfirmButton: false,
              timer: 1500
            });
            }
          );
  
          this.selectedFiles = []; // Reset the selected files array
          location.reload(); // Reload the page after successful update
        }
      );
    }
  }
  
  onupdateuser(updateform: NgForm): void {
    // Supprimer les champs vides du formulaire
    this.service.update(sessionStorage.getItem('userId'), updateform.value).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Votre compte a été mis à jour',
          showConfirmButton: false,
          timer: 1500
        });
  
        updateform.reset(); // Reset the selected files array
        location.reload(); // Reload the page after successful update
      },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
  
}
