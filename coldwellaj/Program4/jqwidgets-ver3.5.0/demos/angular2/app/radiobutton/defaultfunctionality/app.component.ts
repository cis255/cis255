/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxRadioButtonComponent } from 'components/angular_jqxradiobutton';

@Component({
    selector: 'my-app',
    templateUrl: 'app/radiobutton/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('firstRadioButton') firstRadioButton: jqxRadioButtonComponent;
    @ViewChild('secondRadioButton') secondRadioButton: jqxRadioButtonComponent;
    @ViewChild('thirdRadioButton') thirdRadioButton: jqxRadioButtonComponent;
    @ViewChild('fourthRadioButton') fourthRadioButton: jqxRadioButtonComponent;

    ngAfterViewInit(): void
    {
        this.firstRadioButton.createWidget(this.firstRadioButtonSettings);
        this.secondRadioButton.createWidget(this.secondThirdRadioButtonSettings);
        this.thirdRadioButton.createWidget(this.secondThirdRadioButtonSettings);
        this.fourthRadioButton.createWidget(this.fourthRadioButtonSettings);

        let angularRadioButtonsDom = <any>document.getElementsByTagName('angularRadioButton');
        for (let i = 0; i < angularRadioButtonsDom.length; i += 1)
        {
            (angularRadioButtonsDom[i].firstElementChild).style.marginTop = '10px';
        }
    }

    onChangeFirst(event: any): void
    {
        this.clearLog();
        let log = document.getElementById('events');
        let checked = event.args.checked;
        if (checked)
        {
            log.innerHTML += '<div><span>Checked: 12 Months Contract</span></div>';
        } else
        {
            log.innerHTML += '<div><span>Unchecked: 12 Months Contract</span></div>';
        }
    }

    onChangeSecond(event: any): void
    {
        this.clearLog();
        let log = document.getElementById('events');
        let checked = event.args.checked;
        if (checked)
        {
            log.innerHTML += '<div><span>Checked: 6 Months Contract</span></div>';
        } else
        {
            log.innerHTML += '<div><span>Unchecked: 6 Months Contract</span></div>';
        }
    }

    onChangeThird(event: any): void
    {
        this.clearLog();
        let log = document.getElementById('events');
        let checked = event.args.checked;
        if (checked)
        {
            log.innerHTML += '<div><span>Checked: 3 Months Contract</span></div>';
        } else
        {
            log.innerHTML += '<div><span>Unchecked: 3 Months Contract</span></div>';
        }
    }

    clearLog(): void
    {
        let log = document.getElementById('events').getElementsByTagName('span');
        if (log.length >= 2)
        {
            document.getElementById('events').innerHTML = '';
        }
    }

    firstRadioButtonSettings: jqwidgets.RadioButtonOptions =
    {
        width: 250,
        height: 25,
        checked: true
    };

    secondThirdRadioButtonSettings: jqwidgets.RadioButtonOptions =
    {
        width: 250, height: 25
    };

    fourthRadioButtonSettings: jqwidgets.RadioButtonOptions =
    {
        width: 250, height: 25, disabled: true
    };
}
