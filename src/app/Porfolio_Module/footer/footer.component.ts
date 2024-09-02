import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class ContactComponent {
  goToLinkedIn() {
    window.open('https://www.linkedin.com/in/your-profile', '_blank');
  }
}
