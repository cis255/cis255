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

    data_source_mobile =
    {
        datatype: "csv",
        datafields: [
            { name: 'Browser' },
            { name: 'Share' }
        ],
        url: '../sampledata/mobile_browsers_share_dec2011.txt'
    };
    dataAdapter_mobile = new $.jqx.dataAdapter(this.data_source_mobile, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } });
    data_source_desktop =
    {
        datatype: "csv",
        datafields: [
            { name: 'Browser' },
            { name: 'Share' }
        ],
        url: '../sampledata/desktop_browsers_share_dec2011.txt'
    };
    dataAdapter_desktop = new $.jqx.dataAdapter(this.data_source_desktop, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    settings: jqwidgets.ChartOptions = {
        title: "Mobile & Desktop browsers share",
        description: "(source: wikipedia.org)",
        enableAnimations: true,
        showLegend: true,
        showBorderLine: true,
        legendLayout: { left: 520, top: 170, width: 300, height: 200, flow: 'vertical' },
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        seriesGroups:
        [
            {
                type: 'donut',
                offsetX: 250,
                source: this.dataAdapter_mobile,
                xAxis:
                {
                    formatSettings: { prefix: 'Mobile ' }
                },
                series:
                [
                    {
                        dataField: 'Share',
                        displayText: 'Browser',
                        labelRadius: 120,
                        initialAngle: 10,
                        radius: 130,
                        innerRadius: 90,
                        centerOffset: 0,
                        formatSettings: { sufix: '%', decimalPlaces: 1 }
                    }
                ]
            },
            {
                type: 'donut',
                offsetX: 250,
                source: this.dataAdapter_desktop,
                colorScheme: 'scheme02',
                xAxis:
                {
                    formatSettings: { prefix: 'Desktop ' }
                },
                series:
                [
                    {
                        dataField: 'Share',
                        displayText: 'Browser',
                        labelRadius: 120,
                        initialAngle: 10,
                        radius: 70,
                        innerRadius: 30,
                        centerOffset: 0,
                        formatSettings: { sufix: '%', decimalPlaces: 1 }
                    }
                ]
            }
        ]
    } 
}
