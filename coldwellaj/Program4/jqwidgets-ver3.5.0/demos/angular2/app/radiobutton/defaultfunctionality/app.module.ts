import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxRadioButtonComponent } from 'components/angular_jqxradiobutton';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxRadioButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

