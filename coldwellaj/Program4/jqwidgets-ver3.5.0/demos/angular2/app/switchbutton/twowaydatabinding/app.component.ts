/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSwitchButtonComponent } from 'components/angular_jqxswitchbutton';


@Component({
    selector: 'my-app',
    template:
        `<fieldset style="width: 220px; margin-top:1em; margin-bottom: 1em">
            Value is {{ value | json }}
        </fieldset>
        <angularSwitchButton #reference [(ngModel)]='value'></angularSwitchButton>`

})

export class AppComponent implements AfterViewInit
{
    @ViewChild('reference') mySwitchButton: jqxSwitchButtonComponent;

    ngAfterViewInit(): void 
    {
        this.mySwitchButton.createWidget({ width: 81, height: 27 });
    }

    value: boolean;
}
