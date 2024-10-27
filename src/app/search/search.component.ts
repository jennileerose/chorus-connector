import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'search',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchGroups {
  title = 'chorus-connector';
}