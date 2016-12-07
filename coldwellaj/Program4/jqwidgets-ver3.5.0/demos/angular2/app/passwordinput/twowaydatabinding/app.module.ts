import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxPasswordInputComponent } from 'components/angular_jqxpasswordinput';
import { jqxExpanderComponent } from 'components/angular_jqxexpander';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';
import { jqxInputComponent } from 'components/angular_jqxinput';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxPasswordInputComponent, jqxExpanderComponent, jqxButtonComponent, jqxInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule{ }

