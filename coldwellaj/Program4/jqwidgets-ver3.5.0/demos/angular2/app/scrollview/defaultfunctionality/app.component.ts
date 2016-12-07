/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxScrollViewComponent } from 'components/angular_jqxscrollview';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    templateUrl: 'app/scrollview/defaultfunctionality/app.component.htm',
    styleUrls: ['app/scrollview/defaultfunctionality/app.component.css']
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('scrollViewReference') scrollView: jqxScrollViewComponent;
    @ViewChild('StartBtn') startButton: jqxButtonComponent;
    @ViewChild('StopBtn') stopButton: jqxButtonComponent;

    ngAfterViewInit(): void 
    {
        this.scrollView.createWidget(this.scrollViewSettings);
        this.startButton.createWidget(this.buttonSettings);
        this.stopButton.createWidget(this.buttonSettings);
    }

    onStartClicked(): void 
    {
        this.scrollView.slideShow(true);
    }

    onStopClicked(): void 
    {
        this.scrollView.slideShow(false);
    }

    scrollViewSettings: jqwidgets.ScrollViewOptions =
    {
        width: 600,
        height: 450,
        buttonsOffset: [0, 0],
        slideShow: false
    };

    buttonSettings: jqwidgets.ButtonOptions =
    {
        width: 120,
        height: 25
    };
}
