import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/authentication/auth-service.service';

@Component({
  selector: 'app-user-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
   email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  private authService = inject(AuthService);

  loginWithEmail() {
    console.log('Email login:', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });
    // Implement your email login logic here
  }

  loginWithGoogle() {
    this.authService.triggerLogin().subscribe({
      next: () => {
        console.log('Google login initiated');
      }
    });
    // Implement your Google OAuth logic here
  }

  loginWithFacebook() {
    console.log('Facebook login initiated');
    // Implement your Facebook OAuth logic here
  }

  loginWithX() {
    console.log('X (Twitter) login initiated');
    // Implement your X OAuth logic here
  }
}
