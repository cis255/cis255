import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxTreeMapComponent } from 'components/angular_jqxtreemap';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxTreeMapComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

