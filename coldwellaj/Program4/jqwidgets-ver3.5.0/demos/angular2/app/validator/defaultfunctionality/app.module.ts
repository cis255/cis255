import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxExpanderComponent }      from 'components/angular_jqxexpander';
import { jqxValidatorComponent }     from 'components/angular_jqxvalidator';
import { jqxInputComponent }         from 'components/angular_jqxinput';
import { jqxPasswordInputComponent } from 'components/angular_jqxpasswordinput';
import { jqxDateTimeInputComponent } from 'components/angular_jqxdatetimeinput';
import { jqxMaskedInputComponent }   from 'components/angular_jqxmaskedinput';
import { jqxButtonComponent }        from 'components/angular_jqxbuttons';
import { jqxCheckBoxComponent }      from 'components/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxExpanderComponent, jqxValidatorComponent, jqxInputComponent, jqxPasswordInputComponent,
                    jqxDateTimeInputComponent, jqxMaskedInputComponent, jqxButtonComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

