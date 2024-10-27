import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMusicalNoteSolid, heroGlobeAmericasSolid, heroUserGroupSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'logo',
  standalone: true,
  templateUrl: './logo.component.html',
  imports: [NgIconComponent],
  styleUrl: './logo.component.scss',
  providers: [provideIcons({ heroMusicalNoteSolid, heroGlobeAmericasSolid, heroUserGroupSolid })],
})
export class Logo {
  title = 'chorus-connector';
}