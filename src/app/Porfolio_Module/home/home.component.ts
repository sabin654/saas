import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.fig', {
      x: '7vw',
      duration: 1,
      ease: 'power1.inOut', // Optional: Add easing for smoother animation
      repeat: 1, // Infinite repeat
      yoyo: true,
    });

  }
  goToLinkedIn() {
    window.open('https://www.linkedin.com/feed/', '_blank');
  }
  goToGitHub() {
    window.open('https://github.com/sabin654', '_blank');
  }
}

