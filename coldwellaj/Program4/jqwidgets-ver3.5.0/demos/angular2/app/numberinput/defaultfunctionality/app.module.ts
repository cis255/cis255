import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxNumberInputComponent } from 'components/angular_jqxnumberinput';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxNumberInputComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

