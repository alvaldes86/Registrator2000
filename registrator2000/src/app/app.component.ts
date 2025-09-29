import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistrationService } from './services/registration.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'registrator2000';

  posts: any[] = [];   // will hold API response
  loading = true;      // simple loading flag
  error: string | null = null;

  private registrationService = inject(RegistrationService);

  ngOnInit(): void {
    // Call the service and log the result
    this.registrationService.getWithHeaders().subscribe({
      next: (response) => {
        console.log('API response:', response);
      },
      error: (error) => {
        console.error('Error from API:', error);
      }
    });
  }
}
