/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxMaskedInputComponent } from 'components/angular_jqxmaskedinput';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    template: `<div style='margin-top: 10px;'>Numeric</div>
               <angularMaskedInput #numericInput></angularMaskedInput>
               <div style='margin-top: 10px;'>Zip Code</div>
               <angularMaskedInput #zipCodeInput></angularMaskedInput>
               <div style='margin-top: 10px;'>SSN</div>
               <angularMaskedInput #ssnInput></angularMaskedInput>
               <div style='margin-top: 10px;'>Phone Number</div>
               <angularMaskedInput #phoneInput></angularMaskedInput>
               <div style='margin-top: 10px;'>IP Address (ex: 255.255.255.255)</div>
               <angularMaskedInput #regexInput></angularMaskedInput>
               <div style='margin-top: 10px;'>Disabled</div>
               <angularMaskedInput #disabledInput></angularMaskedInput><br/>
               <angularButton #clearButton (onClick)="clear()">Clear</angularButton>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('numericInput') myNumericInput: jqxMaskedInputComponent;
    @ViewChild('zipCodeInput') myZipCodeInput: jqxMaskedInputComponent;
    @ViewChild('ssnInput') mySsnInput: jqxMaskedInputComponent;
    @ViewChild('phoneInput') myPhoneInput: jqxMaskedInputComponent;
    @ViewChild('regexInput') myRegexInput: jqxMaskedInputComponent;
    @ViewChild('disabledInput') myDisabledInput: jqxMaskedInputComponent;
    @ViewChild('clearButton') clearButton: jqxButtonComponent;

    ngAfterViewInit(): void
    {
        this.myNumericInput.createWidget(this.numericInputSettings);
        this.myZipCodeInput.createWidget(this.zipCodeInputSettings);
        this.mySsnInput.createWidget(this.ssnInputSettings);
        this.myPhoneInput.createWidget(this.phoneInputSettings);
        this.myRegexInput.createWidget(this.regexInputSettings);
        this.myDisabledInput.createWidget(this.disabledInputSettings);

        this.clearButton.createWidget({});
    }

    clear(): void
    {
        this.myNumericInput.clear();
        this.myZipCodeInput.clear();
        this.mySsnInput.clear();
        this.myPhoneInput.clear();
        this.myRegexInput.clear();
        this.myDisabledInput.clear();
    }

    numericInputSettings: jqwidgets.MaskedInputOptions = { width: '250px', height: '25px' };
    zipCodeInputSettings: jqwidgets.MaskedInputOptions = { width: 250, height: 25, mask: '#####-####' };
    ssnInputSettings: jqwidgets.MaskedInputOptions = { width: 250, height: 25, mask: '###-##-####' };
    phoneInputSettings: jqwidgets.MaskedInputOptions = { width: 250, height: 25, mask: '(###)###-####' };
    regexInputSettings: jqwidgets.MaskedInputOptions = { width: 250, height: 25, mask: '[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5].[0-2][0-5][0-5]' };
    disabledInputSettings: jqwidgets.MaskedInputOptions = { width: 250, height: 25, disabled: true };
}