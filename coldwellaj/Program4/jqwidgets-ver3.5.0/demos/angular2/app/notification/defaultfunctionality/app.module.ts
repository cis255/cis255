import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxNotificationComponent } from 'components/angular_jqxnotification';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxNotificationComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

