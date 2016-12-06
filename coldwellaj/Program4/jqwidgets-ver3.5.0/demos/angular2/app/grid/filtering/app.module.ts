import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxGridComponent } from 'components/angular_jqxgrid';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';
import { jqxPanelComponent } from 'components/angular_jqxpanel';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxGridComponent, jqxButtonComponent, jqxPanelComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

