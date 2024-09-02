// nav.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavComponent {
  navItems = [
    { link: '#home', label: 'Home', class: 'home-item' },
    { link: '#about', label: 'About' },
    { link: '#skills', label: 'Skills' },
    { link: '#education', label: 'Education' },
    { link: '#cards', label: 'Projects' },
    { link: '#contact', label: 'Contact' },
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
