import { Component } from '@angular/core';


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
    customer: string[] = ['Maria','Pedro','Alicia','Javier','Ingrid'];
    customerMap = {
      '=0':'we dont have any customer waiting',
      '=1':'we have one customer waiting',
      '=2':'we have two customers waiting',
      'other':'we have # customers waiting',
    }

}
