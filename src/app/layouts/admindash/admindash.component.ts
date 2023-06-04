import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {
  constructor(
    private location: Location // Injecting the Location service
  ) {}
  
  ngOnInit(): void {
    // Disable browser back navigation
    history.pushState(null, '', location.href); // Pushes a new state to the browser history without actually changing the URL
  
    // Subscribe to changes in the location
    this.location.subscribe(() => {
      history.pushState(null, '', location.href); // Pushes a new state to the browser history when the location changes
    });
  }
  

}

