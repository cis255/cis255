/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxFormattedInputComponent } from 'components/angular_jqxformattedinput';

@Component({
    selector: 'my-app',
    template: `
        <fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em">
            Value is {{ value | json }}
        </fieldset>
        <angularFormattedInput #formatedInputReference [(ngModel)]='value'></angularFormattedInput>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('formatedInputReference') myFormattedInput: jqxFormattedInputComponent;

    ngAfterViewInit(): void
    {
        this.myFormattedInput.createWidget(this.settings);
    }

    value: string;

    settings: jqwidgets.FormattedInputOptions =
    {
        width: 250,
        height: 25,
        radix: "decimal",
        value: "15",
        spinButtons: true,
        dropDown: true
    }
}
