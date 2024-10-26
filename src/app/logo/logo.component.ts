import { Component } from '@angular/core';

@Component({
  selector: 'logo',
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class Logo {
  title = 'chorus-connector';
}