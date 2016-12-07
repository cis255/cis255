import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxDrawComponent } from 'components/angular_jqxdraw';;

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxDrawComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

