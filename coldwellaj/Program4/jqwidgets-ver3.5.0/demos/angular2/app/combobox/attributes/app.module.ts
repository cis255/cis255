import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxComboBoxComponent } from 'components/angular_jqxcombobox';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxComboBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

