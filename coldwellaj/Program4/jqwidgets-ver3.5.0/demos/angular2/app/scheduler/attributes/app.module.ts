import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxSchedulerComponent } from 'components/angular_jqxscheduler';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxSchedulerComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

