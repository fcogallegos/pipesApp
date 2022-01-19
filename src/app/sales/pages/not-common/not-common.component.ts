import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
  styles: [
  ]
})
export class NotCommonComponent {


  //i18nSelect
  name: string = 'Lizet';
  gender: string = 'femenino';

  inviteMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

    //i18nPlural
    customers: string[] = ['Maria','Pedro','Alicia','Javier','Ingrid'];
    customerMap = {
      '=0':'we dont have any customer waiting',
      '=1':'we have one customer waiting',
      '=2':'we have two customers waiting',
      'other':'we have # customers waiting',
    }

    changePerson() {
      if( this.gender == 'femenino' ) {
        this.name = 'Francisco';
        this.gender = 'masculino';
      } else if (this.gender == 'masculino' ) {
        this.name = 'Ingrid';
        this.gender = 'femenino';
      }
    }

    deleteCustomer() {
      this.customers.shift();
    }

    // KeyValue Pipe
    person = {
      name: 'Francisco',
      age: 27,
      address: 'Tepic, Nayarit'
    }

    // JsonPipe
    heroes = [
      {
        name: 'Superman',
        fly: true
      },
      {
        name: 'Robin',
        fly: false
      },
      {
        name: 'Aquaman',
        fly: false
      }
    ]

    // Async Pipe
    myObservable = interval(2000);

    valuePromise = new Promise( (resolve, reject) => {

      setTimeout(() => {
        resolve('we have promise data');
      }, 3500);
    });

}
