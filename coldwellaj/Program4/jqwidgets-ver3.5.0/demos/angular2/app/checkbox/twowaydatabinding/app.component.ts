/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    template: 
        `<fieldset style="width: 250px; margin-top:1em; margin-bottom: 1em">
            Checkbox is in {{ state | json }} state
        </fieldset>
        <angularCheckBox #CheckBox [(ngModel)]='state'>
            <span>CheckBox</span>
        </angularCheckBox>`
})

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('CheckBox') myCheckBox: jqxCheckBoxComponent;

    ngAfterViewInit(): void
    {
        this.myCheckBox.createWidget({ width: 120, height: 25, checked: true, hasThreeStates: true });
    }    

    state: string;
}
