import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxLayoutComponent } from 'components/angular_jqxlayout';
import { jqxTreeComponent } from 'components/angular_jqxtree';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxLayoutComponent, jqxTreeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

