/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxLinearGaugeComponent } from 'components/angular_jqxlineargauge';

@Component({
    selector: 'my-app',
    template: ` <angularLinearGauge #linearGaugeReference style="margin-left: 60px; float: left;"></angularLinearGauge>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('linearGaugeReference') myLinearGauge: jqxLinearGaugeComponent;

    ngAfterViewInit(): void
    {
        this.myLinearGauge.createWidget(this.settings);
        this.myLinearGauge.value(50);
    }

    settings: jqwidgets.LinearGaugeOptions =
    {
        orientation: 'vertical',
        width: 100,
        height: 350,
        ticksMajor: { size: '10%', interval: 10 },
        ticksMinor: { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } },
        max: 60,
        pointer: { size: '5%' },
        colorScheme: 'scheme05',
        labels:
        {
            interval: 20,
            formatValue: (value: number, position: string): string =>
            {
                if (position === 'far')
                {
                    value = (9 / 5) * value + 32;
                    if (value === -76)
                    {
                        return '°F';
                    }

                    return value + '°';
                }

                if (value === -60)
                {
                    return '°C';
                }

                return value + '°';
            }
        },
        ranges:
        [
            { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
            { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
            { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }
        ],
        animationDuration: 1500
    };
}
