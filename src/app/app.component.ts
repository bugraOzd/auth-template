import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/services/core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-auth-template';

  isAuth: boolean;
  subscriptions: Subscription[];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToAuthState()
    ];
  }

  onClickLogout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']))
      .catch((e) => console.log(e));
  }

  subscribeToAuthState() {
    return this.authService.authChange.subscribe((authState) => this.isAuth = authState);
  }

}
