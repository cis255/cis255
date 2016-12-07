/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxDockingComponent } from 'components/angular_jqxdocking';
import { jqxCalendarComponent } from 'components/angular_jqxcalendar';
import { jqxTabsComponent } from 'components/angular_jqxtabs';
import { jqxListBoxComponent } from 'components/angular_jqxlistbox';
import { jqxPanelComponent } from 'components/angular_jqxpanel';

@Component({
    selector: 'my-app',
    templateUrl: `app/docking/defaultfunctionality/app.component.htm`
})

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('dockingReference') myDocking: jqxDockingComponent;
    @ViewChild('calendarReference') myCalendar: jqxCalendarComponent;
    @ViewChild('tabsReference') myTabs: jqxTabsComponent;
    @ViewChild('panelReference') myPanel: jqxPanelComponent;
    @ViewChild('listBoxReference') myListBox: jqxListBoxComponent;

    ngAfterViewInit(): void
    {
        this.myDocking.createWidget(this.DockingSettings);
        this.myCalendar.createWidget(this.CalendarSettings);
        this.myTabs.createWidget(this.TabsSettings);
        this.myListBox.createWidget(this.ListBoxSettings);
        this.myPanel.createWidget(this.PanelSettings);

        this.myDocking.disableWindowResize('window1');
        this.myDocking.disableWindowResize('window2');
        this.myDocking.disableWindowResize('window3');
        this.myDocking.disableWindowResize('window4');
    }   

    source: Array<String> = [
        'JavaScript Certification - Welcome to our network',
        'Business Challenges via Web take a part',
        'jQWidgets better web, less time. Take a tour',
        'Facebook - you have 7 new notifications',
        'Twitter - John Doe is following you. Look at his profile',
        'New videos, take a look at YouTube.com'
    ];

    DockingSettings: jqwidgets.DockingOptions = {
        orientation: 'horizontal', width: 800, mode: 'docked'
    }
    CalendarSettings: jqwidgets.CalendarOptions = {
        width: 180, height: 180
    }
    TabsSettings: jqwidgets.TabsOptions = {
        width: 375, height: 181, selectedItem: 1
    }
    ListBoxSettings: jqwidgets.ListBoxOptions = {
        source: this.source, width: 375, height: 181
    }
    PanelSettings: jqwidgets.PanelOptions = {
        width: 375, height: 180
    }  
}
