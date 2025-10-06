import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
// navigate(page: string) {
//     this.router.navigate([page]);
//     document.title = `Angular App - ${page.charAt(0).toUpperCase()}${page.slice(1)}`;
//   }
}
