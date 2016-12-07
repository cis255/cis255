/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSwitchButtonComponent } from 'components/angular_jqxswitchbutton';


@Component({
    selector: 'my-app',
    templateUrl: 'app/switchbutton/defaultfunctionality/app.component.htm',
    styleUrls: ['app/switchbutton/defaultfunctionality/app.component.css']
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('button1') button1: jqxSwitchButtonComponent;
    @ViewChild('button2') button2: jqxSwitchButtonComponent;
    @ViewChild('button3') button3: jqxSwitchButtonComponent;
    @ViewChild('button4') button4: jqxSwitchButtonComponent;
    @ViewChild('button5') button5: jqxSwitchButtonComponent;

    ngAfterViewInit(): void 
    {
        this.button1.createWidget(this.buttonSettings);
        this.button2.createWidget(this.buttonSettings);
        this.button3.createWidget(this.buttonSettings);
        this.button4.createWidget(this.buttonSettings);

        this.buttonSettings['checked'] = false;
        this.button5.createWidget(this.buttonSettings);
    }

    onChecked(event: any): void
    {
        (<HTMLElement>document.getElementById('events')).innerHTML = this.label[event.target.parentElement.id] + ': Unchecked';
    }

    onUnchecked(event: any): void 
    {
        (<HTMLElement>document.getElementById('events')).innerHTML = this.label[event.target.parentElement.id] + ': Checked';
    }

    label: any =
    {
        'button1': 'New Mail',
        'button2': 'Sent Mail',
        'button3': 'Calendar Alerts',
        'button4': 'Lock Sounds',
        'button5': 'Keyboard clicks'
    }

    buttonSettings: jqwidgets.SwitchButtonOptions =
    {
        width: 81,
        height: 27,
        checked: true
    }
}
