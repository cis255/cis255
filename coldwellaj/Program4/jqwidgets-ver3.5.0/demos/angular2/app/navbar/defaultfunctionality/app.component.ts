/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxNavBarComponent } from 'components/angular_jqxnavbar';

@Component({
    selector: 'my-app',
    templateUrl: 'app/navbar/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('firstNavBar') navbar1: jqxNavBarComponent;
    @ViewChild('secondNavBar') navbar2: jqxNavBarComponent;
    @ViewChild('thirdNavBar') navbar3: jqxNavBarComponent;
    @ViewChild('fourthNavBar') navbar4: jqxNavBarComponent;
    @ViewChild('fifthNavBar') navbar5: jqxNavBarComponent;
    @ViewChild('sixthNavBar') navbar6: jqxNavBarComponent;

    ngAfterViewInit(): void
    {
        this.navbar1.createWidget({ height: 40, selectedItem: 0 });
        this.navbar2.createWidget({ height: 40, selectedItem: 0 });
        this.navbar3.createWidget({ height: 40, selectedItem: 0 });
        this.navbar4.createWidget({ height: 40, selectedItem: 0 });
        this.navbar5.createWidget({ height: 160, selectedItem: 0 });
        this.navbar6.createWidget({ height: 40, columns: ['30%', '50%', '20%'], selectedItem: 0 });
    }
}
