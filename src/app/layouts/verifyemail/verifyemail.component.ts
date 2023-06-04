import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent {
  isLoading: boolean = true; // Flag to indicate if the page is still loading
  verificationError: boolean = false; // Flag to indicate if there was an error during verification
  
  constructor(
    private route: ActivatedRoute, // ActivatedRoute provides access to information about a route associated with the component
    private router: Router, // Router provides navigation and URL manipulation capabilities
    private service: AuthService, // AuthService is a service used for authentication-related operations
    private location: Location // Location is a service that provides information about the current browser URL
  ) {}
  
  ngOnInit() {
    // Disable browser back navigation
    this.location.onUrlChange(() => this.location.forward()); // Listen to URL changes and navigate forward when it happens
    history.pushState(null, '', location.href); // Update the browser history state with the current URL
    this.location.subscribe(() => {
      history.pushState(null, '', location.href); // Subscribe to URL changes and update the browser history state
    });
  }
  
  }

