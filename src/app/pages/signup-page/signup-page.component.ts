import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/shared/interfaces/user-data';
import { AuthService } from 'src/app/shared/services/core/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signup(signupData: UserData) {
    this.authService.signup(signupData)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => console.log(e));
  }
}
