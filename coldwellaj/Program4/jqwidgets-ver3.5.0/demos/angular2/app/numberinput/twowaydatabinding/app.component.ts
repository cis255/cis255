/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxNumberInputComponent } from 'components/angular_jqxnumberinput';

@Component({
    selector: 'my-app',
    template: `
        <fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em">
           Value is {{ value | json }}
        </fieldset>
        <div style='margin-top: 10px;'>Currency</div>
        <angularNumberInput #currencyInput [(ngModel)]='value'></angularNumberInput>
    `
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('currencyInput') currencyInput: jqxNumberInputComponent;

    ngAfterViewInit(): void
    {
        this.currencyInput.createWidget(this.currencyInputSettings);
    }

    value: string = '123';

    currencyInputSettings: jqwidgets.NumberInputOptions = { width: '250px', height: '25px', symbol: '$', spinButtons: true };
}