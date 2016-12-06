/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDateTimeInputComponent } from 'components/angular_jqxdatetimeinput';

@Component({
    selector: 'my-app',
    template: `<label>Date Input</label>
               <angularDateTimeInput #dateInput></angularDateTimeInput><br />
               <label>Time Input</label>
               <angularDateTimeInput #timeInput></angularDateTimeInput><br />
               <label>Date Time Input</label>
               <angularDateTimeInput #dateTimeInput></angularDateTimeInput>`
}) 

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('dateInput') myDateInput: jqxDateTimeInputComponent;
    @ViewChild('timeInput') myTimeInput: jqxDateTimeInputComponent;
    @ViewChild('dateTimeInput') myDateTimeInput: jqxDateTimeInputComponent;

    ngAfterViewInit(): void
    {
        this.myDateInput.createWidget(this.dateInputSettings);
        this.myTimeInput.createWidget(this.timeInputSettings);
        this.myDateTimeInput.createWidget(this.dateTimeInputSettings);
    }   

    dateInputSettings: jqwidgets.DateTimeInputOptions = {
        width: '300px', height: '25px'
    }
    timeInputSettings: jqwidgets.DateTimeInputOptions = {
        formatString: "T", showTimeButton: true, showCalendarButton: false, width: '300px', height: '25px'
    }
    dateTimeInputSettings: jqwidgets.DateTimeInputOptions = {
        formatString: "F", showTimeButton: true, width: '300px', height: '25px'
    } 
}
