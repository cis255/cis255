/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxButtonGroupComponent } from 'components/angular_jqxbuttongroup';
import { jqxRadioButtonComponent } from 'components/angular_jqxradiobutton';

@Component({
    selector: 'my-app',
    template: `<angularButtonGroup (onButtonclick)="buttonGroupOnClick($event)" #buttonGroup>
                    <button style="padding:4px 16px;" id="Left">Left</button>
                    <button style="padding:4px 16px;" id= "Center">Center</button>
                    <button style="padding:4px 16px;" id= "Right">Right</button>
                </angularButtonGroup>
                <h4>Modes</h4>
                <angularRadioButton (onChecked)="defaltModeSelected()" #DefaultMode>Default</angularRadioButton>
                <angularRadioButton (onChecked)="radioModeSelected()" #RadioMode>RadioButtons</angularRadioButton>
                <angularRadioButton (onChecked)="checkBoxModeSelected()" #CheckBoxMode>CheckBoxes</angularRadioButton>   
                <div id="log" style="margin-top: 10px;"></div>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('buttonGroup') myButtonGroup: jqxButtonGroupComponent;
    @ViewChild('DefaultMode') myDefaultModeRadioButton: jqxRadioButtonComponent;
    @ViewChild('RadioMode') myRadioModeRadioButton: jqxRadioButtonComponent;
    @ViewChild('CheckBoxMode') myCheckBoxModeRadioButton: jqxRadioButtonComponent;
       
    ngAfterViewInit(): void
    {
        this.myButtonGroup.createWidget({ mode: 'default', width: '300px' });
        this.myDefaultModeRadioButton.createWidget({});
        this.myRadioModeRadioButton.createWidget({});
        this.myCheckBoxModeRadioButton.createWidget({});

        this.myDefaultModeRadioButton.check();
    }

    defaltModeSelected(): void
    {
        this.myButtonGroup.mode('default');
    }
    checkBoxModeSelected(): void
    {
        this.myButtonGroup.mode('checkbox');
    }
    radioModeSelected(): void
    {
        this.myButtonGroup.mode('radio');
    }
    buttonGroupOnClick(event: any): void
    {
        let clickedButton = event.args.button;
        (<HTMLElement>document.getElementById("log")).innerHTML = "Clicked: " + clickedButton[0].id;
    }
}
