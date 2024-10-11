import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  projects = [
    {
      image: 'assets/Mydietkitchen.jpg',
      title: 'My Diet Kitchen',
      description: {
        desc1: 'Laravel',
      },
    },
    {
      image: 'assets/perbara.jpg',
      title: 'Perbara',
      description: {
        desc1: 'Laravel',
      },
    },
    {
      image: 'assets/Sipenarik.jpg',
      title: 'Si Penarik',
      description: {
        desc1: 'Laravel',
        desc2: 'HTML, CSS, JS',
      },
    },
    {
      image: 'assets/katbag.png',
      title: 'Katbag',
      description: {
        desc1: 'Angular',
      },
    },
  ];
}
