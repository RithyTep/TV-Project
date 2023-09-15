import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  items: string[] = ['Button 1', 'Button 2', 'Button 3'];
  sidebarOpened = true;
  sidebarWidth = '240px';

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
    this.sidebarWidth = this.sidebarOpened ? '240px' : '60px';
    const toggleButton = document.querySelector('.toggle-button');
    if (toggleButton) {
      if (this.sidebarOpened) {
        toggleButton.classList.remove('closed');
      } else {
        toggleButton.classList.add('closed');
      }
    }
  }
}