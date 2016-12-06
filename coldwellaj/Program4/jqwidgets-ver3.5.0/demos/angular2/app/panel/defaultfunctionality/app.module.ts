import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxPanelComponent } from 'components/angular_jqxpanel';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxPanelComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

