import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/shared/interfaces/user-data';
import { AuthService } from 'src/app/shared/services/core/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(loginData: UserData) {
    this.authService.login(loginData)
      .then(() => this.router.navigate(['/homepage']))
      .catch((e) => console.log(e));
  }
}
