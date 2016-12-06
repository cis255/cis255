import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxKnobComponent } from 'components/angular_jqxknob';
import { jqxNumberInputComponent } from 'components/angular_jqxnumberinput';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxKnobComponent, jqxNumberInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

