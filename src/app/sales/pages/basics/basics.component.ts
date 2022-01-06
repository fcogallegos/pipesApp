import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'francisco';
  nameUpper: string = 'FRANCISCO';
  nameComplete: string = 'francisco gallegos';


  date: Date = new Date();

}
