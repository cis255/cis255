/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxRangeSelectorComponent } from 'components/angular_jqxrangeselector';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    templateUrl: 'app/rangeselector/defaultfunctionality/app.component.htm',
    styles: [
        `angularButton {
            float: left;            
        }`,
        `angularButton:last-child {
            margin-left: 10px;           
        }`
    ]
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('rangeSelectorReference') myRangeSelector: jqxRangeSelectorComponent;
    @ViewChild('getButton') getButton: jqxButtonComponent;
    @ViewChild('setButton') setButton: jqxButtonComponent;

    ngAfterViewInit(): void
    {
        this.myRangeSelector.createWidget(this.settings);
        this.setButton.createWidget({});
        this.getButton.createWidget({});
    }

    onClickGet(): void
    {
        let range = this.myRangeSelector.getRange();
        alert("The selected range is from " + range.from + " to " + range.to);
    }

    onClickSet(): void
    {
        this.myRangeSelector.setRange(30, 70);
    }

    settings: jqwidgets.RangeSelectorOptions =
    {
        width: 750,
        height: 100,
        min: 0,
        max: 200,
        range: { from: 10, to: 50 },
        majorTicksInterval: 10,
        minorTicksInterval: 1
    };

}