/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxCalendarComponent } from 'components/angular_jqxcalendar';

@Component({
    selector: 'my-app',
    template:  
        `<fieldset style="width: 250px; margin-top:1em; margin-bottom: 1em">
            Date is {{ date | json }}
        </fieldset>
        <angularCalendar #calendarReference [(ngModel)]='date'></angularCalendar>`
}) 

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('calendarReference') myCalendar: jqxCalendarComponent;

    ngAfterViewInit(): void
    {
        this.myCalendar.createWidget({ width: 220, height: 220 });
    }

    date: string;
}
