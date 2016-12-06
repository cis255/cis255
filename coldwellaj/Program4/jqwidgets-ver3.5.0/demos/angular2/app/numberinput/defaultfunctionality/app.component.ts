/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxNumberInputComponent } from 'components/angular_jqxnumberinput';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    templateUrl: 'app/numberinput/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('numericInput') numericInput: jqxNumberInputComponent;
    @ViewChild('percentageInput') percentageInput: jqxNumberInputComponent;
    @ViewChild('currencyInput') currencyInput: jqxNumberInputComponent;
    @ViewChild('disabledInput') disabledInput: jqxNumberInputComponent;

    ngAfterViewInit(): void
    {
        this.numericInput.createWidget(this.numericInputSettings);
        this.percentageInput.createWidget(this.percentageInputSettings);
        this.currencyInput.createWidget(this.currencyInputSettings);
        this.disabledInput.createWidget(this.disabledInputSettings);
    }

    numericInputSettings:    jqwidgets.NumberInputOptions = { width: '250px', height: '25px', spinButtons: true };
    percentageInputSettings: jqwidgets.NumberInputOptions = { width: '250px', height: '25px', digits: 3, symbolPosition: 'right', symbol: '%', spinButtons: true };
    currencyInputSettings:   jqwidgets.NumberInputOptions = { width: '250px', height: '25px', symbol: '$', spinButtons: true };
    disabledInputSettings:   jqwidgets.NumberInputOptions = { width: 250, height: 25, disabled: true, spinButtons: true };

}