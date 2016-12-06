import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxMenuComponent } from 'components/angular_jqxmenu';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxMenuComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

