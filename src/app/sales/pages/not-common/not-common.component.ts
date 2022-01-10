import { Component } from '@angular/core';


@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
  styles: [
  ]
})
export class NotCommonComponent {

  name: string = 'Lizet';
  gender: string = 'femenino';

  inviteMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


}
