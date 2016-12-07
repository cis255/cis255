import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxPopoverComponent } from 'components/angular_jqxpopover';
import { jqxButtonComponent }  from 'components/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxPopoverComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

