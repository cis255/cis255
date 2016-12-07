/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxListMenuComponent } from 'components/angular_jqxlistmenu';

@Component({
    selector: 'my-app',
    styles: [
        `#list img
        {
            width: 50px;
            height: 55px;
        }`,
        `#list div
        {
            margin-top: -35px;
            margin-left: 80px;
        }`,
        `.jqx-listmenu-item
        {
            padding: 0px;
            min-height: 57px;
        }`
    ],
    templateUrl: 'app/listmenu/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('listMenuReference') myListMenu: jqxListMenuComponent;

    ngAfterViewInit(): void
    {
        this.myListMenu.createWidget(this.settings);
    }

    settings: jqwidgets.ListMenuOptions =
    {
        autoSeparators: true,
        enableScrolling: false,
        showHeader: true,
        width: '600px',
        placeHolder: 'Find contact...'
    };
}
