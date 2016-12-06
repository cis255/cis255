/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxKnobComponent } from 'components/angular_jqxknob';
import { jqxNumberInputComponent } from 'components/angular_jqxnumberinput';

@Component({
    selector: 'my-app',
    template: `<angularKnob #knobReference (onChange)="onChange($event)"></angularKnob>
               <div class="inputField">
                   <angularNumberInput #numberInputReference (mousedown)="onMouseDown($event)" (keyup)="onKeyup()" (onValueChanged)="onValueChanged()"></angularNumberInput>
               </div>`,
    styleUrls: ['app/knob/defaultfunctionality/app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('knobReference') myKnob: jqxKnobComponent;
    @ViewChild('numberInputReference') numberInput: jqxNumberInputComponent;

    ngAfterViewInit(): void
    {
        this.myKnob.createWidget(this.knobSettings);
        this.numberInput.createWidget(this.numberInputSettings);

        (<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularNumberInput')[0]).children[1]).style.border = 'none';
        (<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularNumberInput')[0]).children[1]).style.backgroundColor = 'transparent';
        (<HTMLElement>(<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularNumberInput')[0]).children[1]).firstElementChild).style.color = 'grey';
        (<HTMLElement>(<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularNumberInput')[0]).children[1]).firstElementChild).style.fontSize = '20px';
        (<HTMLElement>(<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularNumberInput')[0]).children[1]).firstElementChild).style.backgroundColor = 'transparent';
    }

    onChange(event: any): void
    {
        if (event.args.changeSource == 'propertyChange' || event.args.changeSource == 'val') { return; }
        this.numberInput.val(event.args.value);
    }

    onMouseDown(event: any): void
    {
        event.stopPropagation();
    }

    onKeyup(): void
    {
        let val = this.numberInput.val();
        this.myKnob.val(val);
    }

    onValueChanged(): void
    {
        let val = this.numberInput.val();
        this.myKnob.val(val);
    }

    knobSettings: jqwidgets.KnobOptions =
    {
        value: 60,
        min: 0,
        max: 100,
        startAngle: 120,
        endAngle: 420,
        snapToStep: true,
        rotation: 'clockwise',
        style: {
            stroke: '#dfe3e9', strokeWidth: 3,
            fill: { color: '#fefefe', gradientType: "linear", gradientStops: [[0, 1], [50, 0.9], [100, 1]] }
        },
        marks: {
            colorRemaining: { color: 'grey', border: 'grey' },
            colorProgress: { color: '#00a4e1', border: '#00a4e1' },
            type: 'line',
            offset: '71%',
            thickness: 3,
            size: '6%',
            majorSize: '9%',
            majorInterval: 10,
            minorInterval: 2
        },
        labels: {
            offset: '88%',
            step: 10,
            visible: true
        },
        progressBar: {
            style: { fill: '#00a4e1', stroke: 'grey' },
            size: '9%',
            offset: '60%',
            background: { fill: 'grey', stroke: 'grey' }
        },
        pointer: { type: 'arrow', style: { fill: '#00a4e1', stroke: 'grey' }, size: '59%', offset: '49%', thickness: 20 }
    };

    numberInputSettings: jqwidgets.NumberInputOptions =
    {
        width: 60,
        height: '40px',
        decimal: 60,
        min: 0,
        max: 100,
        textAlign: 'center',
        decimalDigits: 1,
        inputMode: 'simple'
    };
}
