import { Component, OnInit } from '@angular/core';

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
  selector: 'app-profile',
  templateUrl:'./profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  public edituser: User =new User();
  public imageUrl!: string;

  isLoggedIn = false;
  id!: number ;
  password: string = "";
  message = '';
  profile_picture!:string;
  fileInfos?: Observable<any>;

  //aziz ktebhom
  selectedFiles: File[] = [];
  profilePictureUrl:string = "assets/img/defaultpicture.jpg"
  currentUser: any ={}
  username?: any;
  email?:any;
 

  constructor(private router: Router,
    private storageService: StorageService,
    private service: AuthService,
    private fb: FormBuilder,
    private imagesService:ImagesService) { }

  ngOnInit(): void {
    
    this.username=sessionStorage.getItem('username')
    this.email=sessionStorage.getItem('email')
   
    
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.edituser.id=user.id;
      console.log(this.edituser.id)
      this.service.getuserbyid(user.id).subscribe({ 
        next:data => {
          console.log("ce user est ",data)
          this.edituser.id=data.id;
          this.edituser.username=data.username;
          this.edituser.email=data.email;
          this.edituser.password=data.password;
          this.edituser.profile_picture=data.profile_picture
        },error:err => {
          console.log(err)
        }
      });
      this.id=user.id;
      this.username = user.username;
      this.email = user.email;
      this.password = user.password;
    }
    else{
      this.router.navigate(['/profile']);
    }
    this.service.getuserbyid(sessionStorage.getItem('userId'))
    .subscribe(
      (response:any)=>{
        this.currentUser=response.data[0]
        console.log(this.currentUser)
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
    )
    
   
  }
  
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onloadend = () => {
        this.profilePictureUrl = reader.result as string
      };
      const files: File[] = event.target.files;
      this.selectedFiles = files;
    }
  }

  changeProfilePic(){
    if(this.selectedFiles.length>0){
      const file = this.selectedFiles[0]
      this.imagesService.UploadImage(file)
      .subscribe(
        (response:any) => {
          const url = response.image;
          const fileName = url.substring(url.lastIndexOf("/") + 1);
          console.log(fileName); 
          const data = {
            profile_picture : fileName
          }
          Swal.fire({
            icon: 'success',
            title: 'Votre photo a été mis a jour',
            showConfirmButton: false,
            timer: 1500
          })
          this.service.updateProfilPicture(sessionStorage.getItem('userId'),data)
          .subscribe(
            (response:any) => {
              console.log(response.message)
              Swal.fire({
                icon: 'success',
                title: 'Votre photo a été mis a jour',
                showConfirmButton: false,
                timer: 1500
              })
              
            }       
          )
          location.reload(); // reload the page after successful update
        }

      )

    }

  }
  
  onupdateuser( updateform: NgForm ):void
  { 
  // Supprimer les champs vides du formulaire
    this.service.update(sessionStorage.getItem('userId'),updateform.value).subscribe
    (
      (response: any) => 
      {
        Swal.fire({
          icon: 'success',
          title: 'Votre compte a été mis a jour',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/profile'])
      
      }
      ,(error: HttpErrorResponse) =>
        alert(error.message)
    );

  }
 
  
}
