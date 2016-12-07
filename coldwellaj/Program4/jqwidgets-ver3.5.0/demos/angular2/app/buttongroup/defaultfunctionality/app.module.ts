import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxButtonGroupComponent } from 'components/angular_jqxbuttongroup';
import { jqxRadioButtonComponent } from 'components/angular_jqxradiobutton';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxButtonGroupComponent, jqxRadioButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
