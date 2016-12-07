import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxTooltipComponent } from 'components/angular_jqxtooltip';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxTooltipComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

