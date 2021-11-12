import { Component } from '@angular/core';
import { NavigationItem } from 'src/app/shared/shared-types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  public navLinks: NavigationItem[] = [
    {name: 'Home', path: 'home'},
    {name: 'Timeline', path: 'timeline'}
  ]

  constructor() { }

}
