/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDateTimeInputComponent } from 'components/angular_jqxdatetimeinput';

@Component({
    selector: 'my-app',
    template: `<label>Date Input</label>
               <angularDateTimeInput #dateInput
                   [width]='300' [height]='25'>
               </angularDateTimeInput>
               <br />

               <label>Time Input</label>
               <angularDateTimeInput #timeInput
                    [width]='300' [height]='25' [formatString]='"T"' [showTimeButton]='true' [showCalendarButton]='false'>
               </angularDateTimeInput>
               <br />

               <label>Date Time Input</label>
               <angularDateTimeInput #dateTimeInput
                   [width]='300' [height]='25' [formatString]='"F"' [showTimeButton]='true'>
               </angularDateTimeInput>`
}) 

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('dateInput') myDateInput: jqxDateTimeInputComponent;
    @ViewChild('timeInput') myTimeInput: jqxDateTimeInputComponent;
    @ViewChild('dateTimeInput') myDateTimeInput: jqxDateTimeInputComponent;

    ngAfterViewInit(): void
    {
        this.myDateInput.createWidget();
        this.myTimeInput.createWidget();
        this.myDateTimeInput.createWidget();
    }   
}
