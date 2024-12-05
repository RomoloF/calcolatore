import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet,
    NgFor,
    CommonModule,
    FormsModule,
    CalculatorComponent,
    MapComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'OpenStreetMap Demo';
  count: number = 0;
  somma: number = 0;
  urlImmagine: string = `https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png`;

  urlImmagines: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
    'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?w=537&ssl=1',
  ];
  immagine: any;

  textboxInput: string = 'aa';
  numero: number = 0;

  constructor() {
    setInterval(() => {
      this.count++;
      this.somma += this.count;
    }, 1000);
  }

  cambiaImmagine() {
    this.urlImmagine = `https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?w=537&ssl=1`;
    this.urlImmagines.push(
      `https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg`
    );
  }
}
