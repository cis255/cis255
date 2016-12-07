import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxWindowComponent } from 'components/angular_jqxwindow';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';
import { jqxTabsComponent } from 'components/angular_jqxtabs';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxWindowComponent, jqxButtonComponent, jqxCheckBoxComponent, jqxTabsComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

