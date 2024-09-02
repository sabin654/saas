import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      id: 'box-1',
      imgSrc: 'assets/images/first.png',
      title: 'Modern Landing Page',
      description:
        'Designed a modern landing page utilizing HTML, CSS, and JavaScript, integrating essential CDNs from npmjs.com to enhance functionality.',
      url: 'https://sabin654.github.io/Modern-Landing-page/',
    },
    {
      id: 'box-2',
      imgSrc: 'assets/images/second.png',
      title: 'Apple Clone Design',
      description:
        'Designed a Apple Clone Design page utilizing HTML, CSS, and JavaScript,  and also done Animation Using Gsap wiht integrating essential CDNs from npmjs.com.',
      url: 'https://sabin654.github.io/Apple-Website-Clone/',
    },
    {
      id: 'box-3',
      imgSrc: 'assets/images/third.png',
      title: 'RPS Game',
      description:
        'Create a Rock Paper Scissors game using javascript where i learn logicg part of how we can do and use it .',
      url: 'https://sabin654.github.io/RPS-Game--jS/',
    },

    {
      id: 'box-4',
      imgSrc: 'assets/images/cosmic.png',
      title: 'Cosmetic Web Design',
      description:
        'Designed a modern landing page utilizing HTML, CSS, and JavaScript, integrating essential CDNs from npmjs.com to enhance functionality.',
      url: 'https://sabin654.github.io/simple-webdesign/',
    },
  
  ];

  ngAfterViewInit(): void {
    $('.carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 1000,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
          },
        },
      ],
    });
  }

  navigateToUrl(url: string): void {
    window.open(url, '_blank');
  }
}
