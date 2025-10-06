import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationService } from './core/registration.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { DesktopNavbarComponent } from "./shared/components/desktop-navbar/desktop-navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavbarComponent, DesktopNavbarComponent, FooterComponent],
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
