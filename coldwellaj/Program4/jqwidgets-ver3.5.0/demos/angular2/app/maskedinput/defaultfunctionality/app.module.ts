import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxMaskedInputComponent } from 'components/angular_jqxmaskedinput';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxMaskedInputComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

