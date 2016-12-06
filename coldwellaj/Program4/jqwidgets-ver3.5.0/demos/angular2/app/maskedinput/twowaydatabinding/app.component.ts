/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxMaskedInputComponent } from 'components/angular_jqxmaskedinput';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    template: `        
               <fieldset style="width: 220px; margin-top:1em; margin-bottom: 1em">
                   Phone Number is {{ number | json }}
               </fieldset>
               <div style='margin-top: 10px;'>Phone Number</div>
               <angularMaskedInput #phoneInput [(ngModel)]='number'></angularMaskedInput>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('phoneInput') myPhoneInput: jqxMaskedInputComponent;

    ngAfterViewInit(): void
    {
        this.myPhoneInput.createWidget(this.phoneInputSettings);
    }

    number: string = '';

    phoneInputSettings: jqwidgets.MaskedInputOptions = { width: 250, height: 25, mask: '(###)###-####' };
}