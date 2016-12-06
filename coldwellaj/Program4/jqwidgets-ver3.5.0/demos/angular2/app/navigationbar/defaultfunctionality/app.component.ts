/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxNavigationBarComponent } from 'components/angular_jqxnavigationbar';

@Component({
    selector: 'my-app',
    templateUrl: 'app/navigationbar/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('navBarReference') myNavigationBar: jqxNavigationBarComponent;

    ngAfterViewInit(): void
    {
        this.myNavigationBar.createWidget({ width: 400, height: 460 });
    }
}
