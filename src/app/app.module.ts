import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Custom module
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';


//change the local app
import localFr from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    SalesModule
  ],
  
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-CA' }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
