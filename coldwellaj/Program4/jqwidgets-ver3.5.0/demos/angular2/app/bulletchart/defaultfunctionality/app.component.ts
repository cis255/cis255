/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxBulletChartComponent } from 'components/angular_jqxbulletchart';

@Component({
    selector: 'my-app',
    template: `<angularBulletChart #bulletChartReference></angularBulletChart>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('bulletChartReference') myBulletChart: jqxBulletChartComponent;

    ngAfterViewInit(): void
    {
        this.myBulletChart.createWidget(this.settings)
    }   

    settings: jqwidgets.BulletChartOptions = {
        width: 500,
        height: 80,
        barSize: "40%",
        title: "Revenue 2014 YTD",
        description: "(U.S. $ in thousands)",
        ranges: [
            { startValue: 0, endValue: 200, color: "#000000", opacity: 0.5 },
            { startValue: 200, endValue: 250, color: "#000000", opacity: 0.3 },
            { startValue: 250, endValue: 300, color: "#000000", opacity: 0.1 }
        ],
        pointer: { value: 270, label: "Revenue 2014 YTD", size: "25%", color: "Black" },
        target: { value: 260, label: "Revenue 2013 YTD", size: 4, color: "Black" },
        ticks: { position: "both", interval: 50, size: 10 },
        labelsFormat: "c",
        showTooltip: true
    }             
}
