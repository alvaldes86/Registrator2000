import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
// navigate(page: string) {
//     this.router.navigate([page]);
//     document.title = `Angular App - ${page.charAt(0).toUpperCase()}${page.slice(1)}`;
//   }
}
