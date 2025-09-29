import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService} from '../../services/auth-service.service';

@Component({
  selector: 'app-user-login',
  imports: [],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  //Use this in the template [formGroup]="loginForm"
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login success!', res);
        },
        error: (err) => {
          console.error('Login failed', err);
        }
      });
    }
  }
}
