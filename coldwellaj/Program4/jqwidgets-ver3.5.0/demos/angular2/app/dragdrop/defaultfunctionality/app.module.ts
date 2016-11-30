import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxDragDropComponent } from 'components/angular_jqxdragdrop';
import { jqxPanelComponent } from 'components/angular_jqxpanel';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxDragDropComponent, jqxPanelComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

