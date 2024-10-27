import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { Logo } from './logo/logo.component'
import { CommonModule } from '@angular/common';
import * as AuthData from '../../auth.json'
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

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
export class AppComponent{
  title = 'chorus-connector';
  showLogin = false;
  showError = false;
  // This block is all stuff for logging in
  authorizationData: any = null;
  constructor(public authService: AuthService){}
  inputUsername = '';
  inputPassword = '';
  displayLogin() {
    this.showLogin = true;
  }
  login() {
    this.authorizationData = AuthData.authorizedLogins[0];
    if(this.authorizationData.username === this.inputUsername && this.authorizationData.password === this.inputPassword) {
      this.authService.isAuthenticated = true;
      this.inputUsername = '';
      this.inputPassword = '';
      this.showLogin = false;
      this.showError = false;
    } else {
      this.authService.isAuthenticated = false;
      this.showError = true;
    }
  }
  logout() {
    if(this.authService.isAuthenticated) {
      this.authService.isAuthenticated = false;
    }
  }
}
