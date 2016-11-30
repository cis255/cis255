/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxBarGaugeComponent } from 'components/angular_jqxbargauge';

@Component({
    selector: 'my-app',
    template:
    `<angularBarGauge #reference 
        [width]='600' [height]='600' [colorScheme]='"scheme02"' [max]='max' [values]='values' [tooltip]='tooltip'>
     </angularBarGauge>
     <button (click)='properties()'>Properties</button>
     <button (click)='methods()'>Methods</button>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('reference') barGauge: jqxBarGaugeComponent;

    ngAfterViewInit(): void
    {
        this.barGauge.createWidget(); 
    }

    tooltip: any =
    {
        visible: true,
        formatFunction: (value: string) => 
        {
            let realVal = parseInt(value);
            return ('Year: 2016<br/>Price Index:' + realVal);
        }
    }

    values: Array<number> = [102, 115, 130, 137];
    max: number = 150;

    properties()
    {
        this.max = 100; 
        this.values = [20,40,60,80,90];
        this.tooltip.visible = false;
    }

    methods()
    {
        this.barGauge.refresh();   
    }
}
