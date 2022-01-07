import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  name: string = 'francisco gallegos';
  value: number = 1024;
  obj: object = {
    name: 'Liz'
  }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }


  showName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}
