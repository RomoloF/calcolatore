import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  display: string = ''; // default

  memory: number | null = null; // Aggiungi un valore per la memoria temporanea (opzionale per operazioni complesse)

  addToDisplay(value: string): void {
    this.display += value;
  }

  calculate(): void {
    try {
      // Esegui il calcolo in sicurezza
      this.display = eval(this.display); // Nota: `eval` può essere pericoloso in contesti complessi!
    } catch {
      this.display = 'Errore';
    }
  }

  clear(): void {
    // Cancellare il calcolo
    this.display = '';
  }
  // Funzioni aggiuntive
  power(): void {
    if (this.display) {
      this.display = `${Math.pow(Number(this.display), 2)}`;
    }
  }
  squareRoot(): void {
    if (this.display) {
      const value = Number(this.display);
      this.display = value >= 0 ? `${Math.sqrt(value)}` : 'Errore';
    }
  }

  logarithm(): void {
    if (this.display) {
      const value = Number(this.display);
      this.display = value > 0 ? `${Math.log(value)}` : 'Errore';
    }
  }
  sin(): void {
    if (this.display) {
      const radians = this.toRadians(Number(this.display));
      this.display = `${Math.sin(radians)}`;
    }
  }

  cos(): void {
    if (this.display) {
      const radians = this.toRadians(Number(this.display));
      this.display = `${Math.cos(radians)}`;
    }
  }

  tan(): void {
    if (this.display) {
      const radians = this.toRadians(Number(this.display));
      this.display = `${Math.tan(radians)}`;
    }
  }

  // Conversione da gradi a radianti (opzionale se lavori in gradi)
  private toRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  // Funzioni Avanzate
  exp(): void {
    if (this.display) {
      this.display = `${Math.exp(Number(this.display))}`;
    }
  }

  asin(): void {
    if (this.display) {
      const value = Number(this.display);
      this.display =
        value >= -1 && value <= 1
          ? `${this.toDegrees(Math.asin(value))}`
          : 'Errore';
    }
  }

  acos(): void {
    if (this.display) {
      const value = Number(this.display);
      this.display =
        value >= -1 && value <= 1
          ? `${this.toDegrees(Math.acos(value))}`
          : 'Errore';
    }
  }

  atan(): void {
    if (this.display) {
      this.display = `${this.toDegrees(Math.atan(Number(this.display)))}`;
    }
  }

  log10(): void {
    if (this.display) {
      const value = Number(this.display);
      this.display = value > 0 ? `${Math.log10(value)}` : 'Errore';
    }
  }

  // Conversione da radianti a gradi (opzionale per funzioni inverse)
  private toDegrees(radians: number): number {
    return (radians * 180) / Math.PI;
  }
}
