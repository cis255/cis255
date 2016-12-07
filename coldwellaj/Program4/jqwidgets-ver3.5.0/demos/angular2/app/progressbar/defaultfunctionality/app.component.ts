/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxProgressBarComponent } from 'components/angular_jqxprogressbar';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    templateUrl: 'app/progressbar/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('horizontal') myHorizontalProgressBar: jqxProgressBarComponent;
    @ViewChild('vertical') myVerticalProgressBar: jqxProgressBarComponent;
    @ViewChild('buttonReference') button: jqxButtonComponent;
    @ViewChild('checkbox') checkbox: jqxCheckBoxComponent;
    @ViewChild('customtextcheckbox') customtextcheckbox: jqxCheckBoxComponent;

    valueInput: number;
    isUpdated: boolean = false;

    ngAfterViewInit(): void
    {
        this.myHorizontalProgressBar.createWidget(this.horizontalProgressBarSettings);
        this.myVerticalProgressBar.createWidget(this.verticalProgressBarSettings);
        this.button.createWidget({});
        this.checkbox.createWidget({});
        this.customtextcheckbox.createWidget({});

        (<HTMLElement>document.getElementsByTagName('angularButton')[0].firstElementChild).style.display = 'inline-block';
    }

    renderText(text: string): string
    {
        return "<span class='jqx-rc-all' style='background: #ffe8a6; color: #e53d37; font-style: italic;'>" + text + "</span>";
    }

    getValueInput(): number
    {
        return parseInt((<any>document.getElementById('ValueInput')).value);
    }

    onClick(): void
    {
        let value = this.getValueInput();
        if (!isNaN(value))
        {
            this.valueInput = value;
            this.myHorizontalProgressBar.val(value);
            this.myVerticalProgressBar.val(value);
            this.isUpdated = true;
        }
    }

    onCheckBox(event: any): void
    {
        let value = this.getValueInput();
        if (value != null && this.isUpdated)
        {
            this.horizontalProgressBarSettings.value = this.valueInput;
            this.verticalProgressBarSettings.value = this.valueInput;
        }

        let isChecked = event.args.checked;
        this.horizontalProgressBarSettings.showText = isChecked;
        this.myHorizontalProgressBar.setOptions(this.horizontalProgressBarSettings);
        this.verticalProgressBarSettings.showText = isChecked;
        this.myVerticalProgressBar.setOptions(this.verticalProgressBarSettings);
    }

    onCustomTextCheckBox(event: any): void
    {
        let value = this.getValueInput();
        if (value != null && this.isUpdated)
        {
            this.horizontalProgressBarSettings.value = this.valueInput;
            this.verticalProgressBarSettings.value = this.valueInput;
        }

        if (event.args.checked)
        {
            this.horizontalProgressBarSettings.renderText = this.renderText;
            this.myHorizontalProgressBar.setOptions(this.horizontalProgressBarSettings);
            this.verticalProgressBarSettings.renderText = this.renderText;
            this.myVerticalProgressBar.setOptions(this.verticalProgressBarSettings);
        }
        else
        {
            this.horizontalProgressBarSettings.renderText = null;
            this.myHorizontalProgressBar.setOptions(this.horizontalProgressBarSettings);
            this.verticalProgressBarSettings.renderText = null;
            this.myVerticalProgressBar.setOptions(this.verticalProgressBarSettings);
        }
    }

    horizontalProgressBarSettings: jqwidgets.ProgressBarOptions =
    {
        width: 250,
        height: 30,
        value: 50
    };

    verticalProgressBarSettings: jqwidgets.ProgressBarOptions =
    {
        width: 30,
        height: 250,
        value: 50,
        orientation: 'vertical'
    };
}
