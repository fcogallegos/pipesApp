import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
      this.items = this.items = [
        {
          label: 'Angular`s Pipes',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Texts and Dates',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label: 'Numbers',
              icon: 'pi pi-dollar',
              routerLink: 'numbers'
            },
            {
              label: 'Not common',
              icon: 'pi pi-globe',
              routerLink: 'not-common'
            }
          ],
        },
        {
          label: 'Custom Pipes',
          icon: 'pi pi-cog'
        }
      ]
  }
  

}
