import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxInputComponent }        from 'components/angular_jqxinput';
import { jqxButtonComponent }       from 'components/angular_jqxbuttons';
import { jqxToolBarComponent }      from 'components/angular_jqxtoolbar';
import { jqxComboBoxComponent }     from 'components/angular_jqxcombobox';
import { jqxDropDownListComponent } from 'components/angular_jqxdropdownlist';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxToolBarComponent, jqxButtonComponent, jqxDropDownListComponent, jqxComboBoxComponent, jqxInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

