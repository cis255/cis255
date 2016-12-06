import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxScrollViewComponent } from 'components/angular_jqxscrollview';
import { jqxButtonComponent }     from 'components/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxScrollViewComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

