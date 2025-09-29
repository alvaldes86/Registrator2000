import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistrationServiceService } from './services/registration-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'registrator2000';

  posts: any[] = [];   // will hold API response
  loading = true;      // simple loading flag
  error: string | null = null;

  private registrationService = inject(RegistrationServiceService);

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
