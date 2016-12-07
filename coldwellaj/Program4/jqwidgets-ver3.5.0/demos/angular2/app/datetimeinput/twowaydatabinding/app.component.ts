/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDateTimeInputComponent } from 'components/angular_jqxdatetimeinput';

@Component({
    selector: 'my-app',
    template: 
               `<fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em">
                   Date is {{ date | json }}
               </fieldset>
               <angularDateTimeInput #dateInput [(ngModel)]='date'></angularDateTimeInput><br />               
               <fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em">
                   Time is {{ time | json }}
               </fieldset>
               <angularDateTimeInput #timeInput [(ngModel)]='time'></angularDateTimeInput>`
}) 

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('dateInput') myDateInput: jqxDateTimeInputComponent;
    @ViewChild('timeInput') myTimeInput: jqxDateTimeInputComponent;

    ngAfterViewInit(): void
    {
        this.myDateInput.createWidget(this.dateInputSettings);
        this.myTimeInput.createWidget(this.timeInputSettings);
    }   

    dateInputSettings: jqwidgets.DateTimeInputOptions = {
        width: '300px', height: '25px'
    }
    timeInputSettings: jqwidgets.DateTimeInputOptions = {
        formatString: "HH:mm", showTimeButton: true, showCalendarButton: false, width: '300px', height: '25px'
    }

    time: string;
    date: string;
}


