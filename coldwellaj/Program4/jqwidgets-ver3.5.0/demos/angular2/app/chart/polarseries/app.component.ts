/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxChartComponent } from 'components/angular_jqxChart';
import { jqxSliderComponent } from 'components/angular_jqxslider';
import { jqxDropDownListComponent } from 'components/angular_jqxdropdownlist';

@Component({
    selector: 'my-app',
    templateUrl: 'app/chart/polarseries/app.component.htm'
}) 

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('chartReference') myChart: jqxChartComponent;
    @ViewChild('sliderStartAngle') SliderStartAngle: jqxSliderComponent;
    @ViewChild('sliderRadius') SliderRadius: jqxSliderComponent;
    @ViewChild('dropDownSeries') DropDownSeries: jqxDropDownListComponent;
    @ViewChild('dropDownColors') DropDownColors: jqxDropDownListComponent;

    ngAfterViewInit(): void
    {
        this.myChart.createWidget(this.chartSettings);
        this.SliderRadius.createWidget(this.sliderRadiusSettings);
        this.SliderStartAngle.createWidget(this.sliderStartAngleSettings);
        this.DropDownColors.createWidget(this.dropDownListColorsSettings);
        this.DropDownSeries.createWidget(this.dropDownListSeriesSettings);
    }    
    
    sliderStartAngleOnChange(event: any): void
    {
        let value = event.args.value;
        this.chartSettings.seriesGroups[0].startAngle = value;
        this.chartSettings.seriesGroups[0].endAngle = value + 360;
        this.myChart.seriesGroups(this.chartSettings.seriesGroups);
    }
    sliderRadiusOnChange(event: any): void
    {
        let value = event.args.value;
        this.chartSettings.seriesGroups[0].radius = value;
        this.myChart.seriesGroups(this.chartSettings.seriesGroups);
    }
    dropDownListColorsOnChange(event: any): void
    {
        let value = event.args.item.value;
        this.myChart.colorScheme(value);
    }
    dropDownListSeriesOnSelect(event: any): void
    {
        let args = event.args;
        if (args)
        {
            let value = args.item.value;
            this.chartSettings.seriesGroups[0].type = value;
            this.myChart.seriesGroups(this.chartSettings.seriesGroups);
        }
    }

    source =
    {
        datatype: "tab",
        datafields: [
            { name: 'Year' },
            { name: 'HPI' },
            { name: 'BuildCost' },
            { name: 'Population' },
            { name: 'Rate' }
        ],
        url: '../sampledata/homeprices.txt'
    };

    dataAdapter = new $.jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    chartSettings: jqwidgets.ChartOptions = {
        title: "U.S. Real Home Price vs Building Cost Indeces (1950-2010)",
        description: "Source: http://www.econ.yale.edu/~shiller/data.htm",
        enableAnimations: false,
        showLegend: true,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
        source: this.dataAdapter,
        xAxis:
        {
            dataField: 'Year',
            unitInterval: 10,
            maxValue: 2010,
            valuesOnTicks: true,
            labels: { autoRotate: true }
        },
        colorScheme: 'scheme01',
        seriesGroups:
        [
            {
                polar: true,
                radius: 120,
                type: 'splinearea',
                valueAxis:
                {
                    labels: {
                        formatSettings: { decimalPlaces: 0 },
                        autoRotate: true
                    }
                },
                series: [
                    { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.7, lineWidth: 1, radius: 2 },
                    { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.7, lineWidth: 1, radius: 2 }
                ]
            }
        ]
    };

    colorsSchemesList = ["scheme01", "scheme02", "scheme03", "scheme04", "scheme05", "scheme06", "scheme07", "scheme08"];
    seriesList = ["splinearea", "spline", "column", "scatter", "stackedcolumn", "stackedsplinearea", "stackedspline"];

    sliderStartAngleSettings: jqwidgets.SliderOptions = {
        width: 240, min: 0, max: 360, step: 1, ticksFrequency: 20, mode: 'fixed'
    }
    sliderRadiusSettings: jqwidgets.SliderOptions = {
        width: 240, min: 80, max: 140, value: 120, step: 1, ticksFrequency: 20, mode: 'fixed'
    }
    dropDownListSeriesSettings: jqwidgets.DropDownListOptions = {
        source: this.seriesList, selectedIndex: 0, width: '200', height: '25', dropDownHeight: 100
    }
    dropDownListColorsSettings: jqwidgets.DropDownListOptions = {
        source: this.colorsSchemesList, selectedIndex: 2, width: '200', height: '25', dropDownHeight: 100
    }
}
