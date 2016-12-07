/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxPasswordInputComponent } from 'components/angular_jqxpasswordinput';

@Component({
    selector: 'my-app',
    template: `
        <fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em">
           Password is {{ password | json }}
        </fieldset>
        <angularPasswordInput #reference width="200px" height="21px" [(ngModel)]='password'></angularPasswordInput>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('reference') passwordInput: jqxPasswordInputComponent;

    ngAfterViewInit(): void
    {
        this.passwordInput.createWidget({ showStrength: true, showStrengthPosition: "right" });
    }

    password: string = '';
}
