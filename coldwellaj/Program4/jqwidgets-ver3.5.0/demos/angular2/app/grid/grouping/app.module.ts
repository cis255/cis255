import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxGridComponent } from 'components/angular_jqxgrid';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxGridComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

