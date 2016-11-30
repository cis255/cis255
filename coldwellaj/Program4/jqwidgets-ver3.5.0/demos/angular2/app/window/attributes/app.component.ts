/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxWindowComponent } from 'components/angular_jqxwindow';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';
import { jqxTabsComponent } from 'components/angular_jqxtabs';

@Component({
    selector: 'my-app',
    templateUrl: 'app/window/attributes/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('windowReference') window: jqxWindowComponent;
    @ViewChild('showWindowButton') showWindowButton: jqxButtonComponent;
    @ViewChild('hideWindowButton') hideWindowButton: jqxButtonComponent;
    @ViewChild('resizeCheckBox') resizeCheckBox: jqxCheckBoxComponent;
    @ViewChild('dragCheckBox') dragCheckBox: jqxCheckBoxComponent;
    @ViewChild('tabsReference') tab: jqxTabsComponent;

    ngAfterViewInit(): void
    {
        this.showWindowButton.createWidget();
        this.hideWindowButton.createWidget();
        this.resizeCheckBox.createWidget();
        this.dragCheckBox.createWidget();
        this.window.createWidget();
        this.tab.createWidget();
        this.window.focus();
    }

    onResizeCheckBox(event: any): void
    {
        if (event.args.checked) 
        {
            this.window.resizable(true);
        }
        else 
        {
            this.window.resizable(false);
        }
    }

    onDragCheckBox(event: any): void
    {
        if (event.args.checked) 
        {
            this.window.draggable(true);
        }
        else 
        {
            this.window.draggable(false);
        }
    }

    onShowButton(): void
    {
        this.window.open();
    }

    onHideButton(): void
    {
        this.window.close();
    }
}
