import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink, Router } from '@angular/router';
import { Logo } from './logo/logo.component'
import { CommonModule } from '@angular/common';
import * as AuthData from '../../auth.json'
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import * as ChoirData from '../../data.json';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Logo,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'chorus-connector';
  ngOnInit() {
    // preloading data in local data due to lack of DB
    localStorage.setItem('choirData', JSON.stringify(ChoirData))
  }
  // This block is all stuff for logging in
  showLogin = false;
  showError = false;
  authorizationData: any = null;
  constructor(public authService: AuthService, private router: Router,){}
  inputUsername = '';
  inputPassword = '';
  // Show the login username/password fields
  displayLogin() {
    this.showLogin = true;
  }
  hideLogin() {
    this.showLogin = false;
  }
  // log into the management admin account
  login() {
    this.authorizationData = AuthData.authorizedLogins[0];
    if(this.authorizationData.username === this.inputUsername && this.authorizationData.password === this.inputPassword) {
      this.authService.isAuthenticated = true;
      this.showLogin = false;
      this.showError = false;
    } else {
      this.authService.isAuthenticated = false;
      this.showError = true;
    }
  }
  // logout from the managment admin account
  logout() {
    if(this.authService.isAuthenticated) {
      this.authService.isAuthenticated = false;
      this.router.navigate(['/']);
    }
  }
}
