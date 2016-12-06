import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxProgressBarComponent } from 'components/angular_jqxprogressbar';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxProgressBarComponent, jqxButtonComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

