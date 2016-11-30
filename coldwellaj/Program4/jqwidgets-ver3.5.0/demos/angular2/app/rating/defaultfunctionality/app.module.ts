import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { jqxRatingComponent } from 'components/angular_jqxrating';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxRatingComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

