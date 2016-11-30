/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxMenuComponent } from 'components/angular_jqxmenu';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    templateUrl: 'app/menu/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('menuReference') myMenu: jqxMenuComponent;
    @ViewChild('animation') myAnimationCheckBox: jqxCheckBoxComponent;
    @ViewChild('disabled') myDisabledCheckBox: jqxCheckBoxComponent;
    @ViewChild('hover') myHoverCheckBox: jqxCheckBoxComponent;
    @ViewChild('open') myOpenCheckBox: jqxCheckBoxComponent;
    @ViewChild('topLevelArrows') myTopLevelArrowsCheckBox: jqxCheckBoxComponent;

    ngAfterViewInit(): void
    {
        this.myMenu.createWidget(this.settings);

        this.checkBoxSettings.checked = true;
        this.myAnimationCheckBox.createWidget(this.checkBoxSettings);
        this.myHoverCheckBox.createWidget(this.checkBoxSettings);
        this.myOpenCheckBox.createWidget(this.checkBoxSettings);

        this.checkBoxSettings.checked = false;
        this.myDisabledCheckBox.createWidget(this.checkBoxSettings);

        this.checkBoxSettings = { width: '200px', height: '20px' };
        this.myTopLevelArrowsCheckBox.createWidget(this.checkBoxSettings);
    }

    animationOnChange(event: any): void
    {
        let value = event.args.checked;
        // enable or disable the menu's animation.
        if (!value)
        {
            this.myMenu.setOptions
                ({
                    animationShowDuration: 0,
                    animationHideDuration: 0,
                    animationShowDelay: 0
                });
        }
        else
        {
            this.myMenu.setOptions
                ({
                    animationShowDuration: 300,
                    animationHideDuration: 200,
                    animationShowDelay: 200
                });
        }
    }

    disabledOnChange(event: any): void
    {
        let value = event.args.checked;
        // enable or disable the menu
        if (!value)
        {
            this.myMenu.disabled(false);
        }
        else
        {
            this.myMenu.disabled(true);
        }
    }

    hoverOnChange(event: any): void
    {
        let value = event.args.checked;
        // enable or disable the menu's hover effect.
        if (!value)
        {
            this.myMenu.enableHover(false);
        }
        else
        {
            this.myMenu.enableHover(true);
        }
    }

    openOnChange(event: any): void
    {
        let value = event.args.checked;
        // enable or disable the opening of the top level menu items when the user hovers them.
        if (!value)
        {
            this.myMenu.autoOpen(false);
        }
        else
        {
            this.myMenu.autoOpen(true);
        }
    }

    topLevelArrowsOnChange(event: any): void
    {
        let value = event.args.checked;
        // enable or disable the top level arrows.
        if (!value)
        {
            this.myMenu.showTopLevelArrows(false);
        }
        else
        {
            this.myMenu.showTopLevelArrows(true);
        }
    }

    settings: jqwidgets.MenuOptions =
    {
        width: '670', height: '30px'
    };

    checkBoxSettings: jqwidgets.CheckBoxOptions =
    {
        width: '150px', height: '20px'
    };
}
