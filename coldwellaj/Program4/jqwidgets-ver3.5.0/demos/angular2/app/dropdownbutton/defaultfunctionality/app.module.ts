import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxDropDownButtonComponent } from 'components/angular_jqxdropdownbutton';
import { jqxTreeComponent }           from 'components/angular_jqxtree';
import { jqxCheckBoxComponent }       from 'components/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxDropDownButtonComponent, jqxTreeComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

