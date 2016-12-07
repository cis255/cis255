import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxTabsComponent }     from 'components/angular_jqxtabs';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxTabsComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

