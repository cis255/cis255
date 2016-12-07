/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxChartComponent } from 'components/angular_jqxChart';

@Component({
    selector: 'my-app',
    template: `<angularChart [width]='850' [height]='500' #chartReference></angularChart>`
})

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('chartReference') myChart: jqxChartComponent;

    ngAfterViewInit(): void
    {
        this.myChart.createWidget(this.settings);
    }    

    sampleData = [
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
    ];

    settings: jqwidgets.ChartOptions = {
        title: "Fitness & exercise weekly scorecard",
        description: "Time spent in vigorous exercise",
        enableAnimations: true,
        showLegend: true,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        source: this.sampleData,
        xAxis:
        {
            dataField: 'Day',
            gridLines: {
                visible: true
            }
        },
        colorScheme: 'scheme01',
        seriesGroups:
        [
            {
                type: 'column',
                columnsGapPercent: 50,
                seriesGapPercent: 0,
                valueAxis:
                {
                    unitInterval: 10,
                    minValue: 0,
                    maxValue: 100,
                    displayValueAxis: true,
                    description: 'Time in minutes',
                    axisSize: 'auto',
                    tickMarksColor: '#888888'
                },
                series: [
                    { dataField: 'Keith', displayText: 'Keith' },
                    { dataField: 'Erica', displayText: 'Erica' },
                    { dataField: 'George', displayText: 'George' }
                ]
            }
        ]
    }
}


