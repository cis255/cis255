import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxBulletChartComponent } from 'components/angular_jqxbulletchart';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxBulletChartComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

