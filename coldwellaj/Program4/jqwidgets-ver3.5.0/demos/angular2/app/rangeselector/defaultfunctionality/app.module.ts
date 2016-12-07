import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxRangeSelectorComponent } from 'components/angular_jqxrangeselector';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxRangeSelectorComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

