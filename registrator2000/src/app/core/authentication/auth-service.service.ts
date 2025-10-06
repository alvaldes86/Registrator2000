import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private apiUrl = 'https://your-api.com/auth/login';

  login(credentials: any) {
    return this.http.post<{ token: string }>(this.apiUrl, credentials).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  triggerLogin() {
    return this.http.get('https://simple-grocery-store-api.glitch.me/products');
  }
}
