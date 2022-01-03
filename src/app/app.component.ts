import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'francisco gallegos';
  value: number = 1024;
  obj: object = {
    name: 'Liz'
  }

  showName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}
