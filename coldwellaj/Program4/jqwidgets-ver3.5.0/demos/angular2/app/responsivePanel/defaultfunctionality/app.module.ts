import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxTreeComponent } from 'components/angular_jqxtree';
import { jqxPanelComponent } from 'components/angular_jqxpanel';
import { jqxResponsivePanelComponent } from 'components/angular_jqxresponsivepanel';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxTreeComponent, jqxPanelComponent, jqxResponsivePanelComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

