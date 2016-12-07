import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxTreeGridComponent } from 'components/angular_jqxtreegrid';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxTreeGridComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

