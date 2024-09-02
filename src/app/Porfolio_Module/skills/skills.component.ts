import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    {
      name: 'Front-End Design',
      icon: 'fas fa-code',
      description:
        'Proficient in HTML, CSS, JavaScript, and frameworks like Angular and React.',
    },
    {
      name: 'UI/UX Design',
      icon: 'fas fa-paint-brush',
      description:
        'Experienced in creating user-centric designs and wireframing.',
    },
    {
      name: 'Database',
      icon: 'fas fa-database',
      description: 'Knowledgeable in SQL, NoSQL, and database management.',
    },
    {
      name: 'Communication',
      icon: 'fas fa-comments',
      description: 'Strong verbal and written communication skills.',
    },
    {
      name: 'Team Work',
      icon: 'fas fa-users',
      description:
        'Excellent team collaboration and project management abilities.',
    },
    {
      name: 'Team Work',
      icon: 'fas fa-users',
      description:
        'Excellent team collaboration and project management abilities.',
    },
  ];

  animateSkills = true;
@HostListener('window:scroll', [])
  onWindowScroll() {
    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      const skillsTop = skillsElement.getBoundingClientRect().top + window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight;

      // Check if the element is within view
      if (scrollPosition > skillsTop + skillsElement.offsetHeight / 4) {
        this.animateSkills = true;
      } else {
        this.animateSkills = false;
      }
    }
  }
  }

  