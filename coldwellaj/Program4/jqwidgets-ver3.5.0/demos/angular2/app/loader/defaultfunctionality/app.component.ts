/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxLoaderComponent } from 'components/angular_jqxloader';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    template: `<angularLoader #loaderReference></angularLoader>
               <angularButton #OpenButton  style="float: left;" (onClick)="open()">Open Loader</angularButton>
               <angularButton #CloseButton style="float: left; margin-left: 10px;" (onClick)="close()">Close</angularButton>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('loaderReference') myLoader: jqxLoaderComponent;
    @ViewChild('OpenButton') openButton: jqxButtonComponent;
    @ViewChild('CloseButton') closeButton: jqxButtonComponent;

    ngAfterViewInit(): void
    {
        this.myLoader.createWidget(this.settings);
        this.closeButton.createWidget({ width: 100 });
        this.openButton.createWidget({ width: 150 });
    }

    open(): void
    {
        this.myLoader.open();
    }

    close(): void
    {
        this.myLoader.close();
    }

    settings: jqwidgets.LoaderOptions =
    {
        width: 100,
        height: 60,
        imagePosition: 'top'
    };
}
