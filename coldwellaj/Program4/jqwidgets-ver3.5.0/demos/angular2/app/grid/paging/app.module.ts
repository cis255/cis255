import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxGridComponent } from 'components/angular_jqxgrid';
import { jqxPanelComponent } from 'components/angular_jqxpanel';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxGridComponent, jqxPanelComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

