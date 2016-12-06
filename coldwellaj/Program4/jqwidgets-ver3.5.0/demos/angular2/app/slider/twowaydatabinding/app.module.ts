import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxSliderComponent } from 'components/angular_jqxslider';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxSliderComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

