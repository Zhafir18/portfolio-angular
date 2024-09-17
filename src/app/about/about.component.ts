import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  certificates = [
    { title: 'Certificate 1', imgUrl: '/assets/sertifikat1.jpg' },
    { title: 'Certificate 2', imgUrl: '/assets/sertifikat1.jpg' },
    { title: 'Certificate 3', imgUrl: '/assets/sertifikat1.jpg' },
  ];

  skills = [
    { name: 'HTML, CSS, & JavaScript', percentage: 85 },
    { name: 'Java', percentage: 70 },
    { name: '.NET', percentage: 60 },
    { name: 'Angular', percentage: 75 },
  ];

  currentSlide = 0;

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.certificates.length - 1) {
      this.currentSlide++;
    }
  }
}
