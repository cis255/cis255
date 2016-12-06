import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxNavigationBarComponent } from 'components/angular_jqxnavigationbar';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxNavigationBarComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

