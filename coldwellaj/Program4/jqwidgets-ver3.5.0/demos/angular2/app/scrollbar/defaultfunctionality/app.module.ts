import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxScrollBarComponent } from 'components/angular_jqxscrollbar';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxScrollBarComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

