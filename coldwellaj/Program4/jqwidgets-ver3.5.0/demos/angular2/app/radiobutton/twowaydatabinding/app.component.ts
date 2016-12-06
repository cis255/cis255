/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxRadioButtonComponent } from 'components/angular_jqxradiobutton';

@Component({
    selector: 'my-app',
    template:
       `<fieldset style="width: 230px; margin-top:1em; margin-bottom: 1em">
            Sex is {{ value | json }} 
        </fieldset>
        <angularRadioButton #firstRadioButton value='Man' [(ngModel)]='value'>
             <span>Sex: Man</span>
        </angularRadioButton>
        <angularRadioButton #secondRadioButton value='Female' [(ngModel)]='value'>
            <span>Sex: Female</span>
        </angularRadioButton>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('firstRadioButton') firstRadioButton: jqxRadioButtonComponent;
    @ViewChild('secondRadioButton') secondRadioButton: jqxRadioButtonComponent;

    ngAfterViewInit(): void
    {
        this.firstRadioButton.createWidget({ width: 250, height: 25, checked: true });
        this.secondRadioButton.createWidget({ width: 250, height: 25, checked: false });
    }

    value: boolean;
}
