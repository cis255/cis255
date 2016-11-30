import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxGaugeComponent } from 'components/angular_jqxgauge';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxGaugeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

