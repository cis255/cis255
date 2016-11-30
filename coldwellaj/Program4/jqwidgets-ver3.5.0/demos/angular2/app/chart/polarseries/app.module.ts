import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxChartComponent }        from 'components/angular_jqxChart';
import { jqxSliderComponent }       from 'components/angular_jqxslider';
import { jqxDropDownListComponent } from 'components/angular_jqxdropdownlist'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxChartComponent, jqxSliderComponent, jqxDropDownListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

