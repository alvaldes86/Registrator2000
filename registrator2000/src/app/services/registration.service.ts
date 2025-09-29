import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getMessage(): string {
    return 'Hello from MyService!';
  }

  private apiUrl = 'https://enrollpro-ctdeb9a9a9c8b8ez.canadacentral-01.azurewebsites.net/business/getAllBusinesses';
  getWithHeaders(): Observable<any> {
    return this.http.get(this.apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '0d2e643e-e9b4-4b1a-bb7a-e717f4ae1f5d'
      }
    });
  }

  getProducts(): Observable<any> {
    return this.http.get('https://simple-grocery-store-api.glitch.me/products');
  }
}
