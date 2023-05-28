import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent {
  isLoading: boolean = true;
  verificationError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthService,
  ) {}

  ngOnInit() {
    // Get the email parameter from the query string
    this.route.queryParams.subscribe(params => {
      const email = params['email'];
      if (email) {
        // Call the authentication service to verify the email
        this.service.verifyEmail(email).subscribe(
          (response : any) => {
            // Email verification successful, redirect to the dashboard
            this.router.navigate(['/dashbord']);
          },
          error => {
            // Error occurred during email verification
            console.error(error);
            this.verificationError = true;
            this.isLoading = false;
          }
        );
      } else {
        // Email parameter not found, show error message
        this.verificationError = true;
        this.isLoading = false;
      }
    });
  }
}
