/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxExpanderComponent } from 'components/angular_jqxexpander';

@Component({
    selector: 'my-app',
    templateUrl: `app/expander/defaultfunctionality/app.component.htm`
})

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('expanderReference') myExpander: jqxExpanderComponent;

    ngAfterViewInit(): void
    {
        this.myExpander.createWidget({ width: '350px' }); 
    }   
}
