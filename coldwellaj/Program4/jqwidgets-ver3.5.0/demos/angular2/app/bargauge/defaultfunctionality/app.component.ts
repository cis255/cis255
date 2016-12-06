/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxBarGaugeComponent } from 'components/angular_jqxbargauge';

@Component({
    selector: 'my-app',
    template: `<angularBarGauge #barGaugeReference></angularBarGauge>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('barGaugeReference') myBarGauge: jqxBarGaugeComponent;

    ngAfterViewInit(): void
    {
        this.myBarGauge.createWidget(this.barGaugeSettings);
    }

    barGaugeSettings: jqwidgets.BarGaugeOptions =
    {
        colorScheme: "scheme02",
        width: 600,
        height: 600,
        max: 150,
        values: [102, 115, 130, 137],
        tooltip: {
            visible: true,
            formatFunction: (value: string) =>
            {
                let realVal = parseInt(value);
                return ('Year: 2016<br/>Price Index:' + realVal);
            }
        }
    }
}
