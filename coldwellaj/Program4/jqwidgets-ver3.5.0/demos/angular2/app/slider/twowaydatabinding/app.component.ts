/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSliderComponent } from 'components/angular_jqxslider';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    template: 
        `<fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em">
            Value is {{ value | json }}
        </fieldset>
        <angularSlider #reference [(ngModel)]='value'></angularSlider>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('reference') mySlider: jqxSliderComponent;

    ngAfterViewInit(): void 
    {
        this.mySlider.createWidget(this.settings);
    }

    value: number;

    settings: jqwidgets.SliderOptions =
    {
        showTickLabels: true, tooltip: true, mode: "fixed", height: 60,
        min: 0, max: 100, ticksFrequency: 25, value: 25, step: 5
    };

}
