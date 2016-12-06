import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxLoaderComponent } from 'components/angular_jqxloader';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxLoaderComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

