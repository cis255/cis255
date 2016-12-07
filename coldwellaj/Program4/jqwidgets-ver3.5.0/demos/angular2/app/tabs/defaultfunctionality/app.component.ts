/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTabsComponent } from 'components/angular_jqxtabs';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';


@Component({
    selector: 'my-app',
    templateUrl: 'app/tabs/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('tabsReference') myTabs: jqxTabsComponent;
    @ViewChild('animation') checkBox: jqxCheckBoxComponent;
    @ViewChild('contentAnimation') checkBox2: jqxCheckBoxComponent;

    ngAfterViewInit(): void 
    {
        (<HTMLElement>document.getElementById('animation').firstElementChild).style.marginTop = '10px';
        (<HTMLElement>document.getElementById('contentAnimation').firstElementChild).style.marginTop = '10px';

        this.myTabs.createWidget(this.tabsSettings);
        this.checkBox.createWidget({});
        this.checkBox2.createWidget({});
    }

    onChangeAnimation(event: any): void
    {
        let checked = event.args.checked;
        this.myTabs.selectionTracker(checked);
    }

    onChangeContentAnimation(event: any): void
    {
        let checked = event.args.checked;
        if (checked)
        {
            this.myTabs.animationType('fade');
        }
        else 
        {
            this.myTabs.animationType('none');
        }
    }

    tabsSettings: jqwidgets.TabsOptions =
    {
        width: '90%',
        height: 200,
        position: 'top',
        animationType: 'none',
        selectionTracker: false
    };
}
