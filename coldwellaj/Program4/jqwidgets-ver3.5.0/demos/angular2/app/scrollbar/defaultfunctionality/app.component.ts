/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxScrollBarComponent } from 'components/angular_jqxscrollbar';

@Component({
    selector: 'my-app',
    template: `
               <div style="margin-bottom: 10px;" id='VerticalDiv'>Vertical</div>
               <angularScrollBar #verticalScrollBar (onValueChanged)="onValueChangedVertical($event)"></angularScrollBar>
               <div style="margin: 10px 0;" id='HorizontalDiv'>Horizontal</div>
               <angularScrollBar #horizontalScrollBar (onValueChanged)="onValueChangedHorizontal($event)"></angularScrollBar> `
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('verticalScrollBar') verticalScrollBar: jqxScrollBarComponent;
    @ViewChild('horizontalScrollBar') horizontalScrollBar: jqxScrollBarComponent;

    ngAfterViewInit(): void 
    {
        this.verticalScrollBar.createWidget(this.verticalScrollBarSettings);
        this.horizontalScrollBar.createWidget(this.horizontalScrollBarSettings);
    }

    onValueChangedVertical(event)
    {
        (<HTMLElement>document.getElementById('VerticalDiv')).innerHTML = 'Vertical (' + parseInt(event.currentValue) + ')';
    }
    onValueChangedHorizontal(event)
    {
        (<HTMLElement>document.getElementById('HorizontalDiv')).innerHTML = 'Horizontal (' + parseInt(event.currentValue) + ')';
    }

    verticalScrollBarSettings: jqwidgets.ScrollBarOptions =
    {
        width: 18,
        height: 280,
        min: 0,
        max: 1000,
        vertical: true
    }

    horizontalScrollBarSettings: jqwidgets.ScrollBarOptions =
    {
        width: 280,
        height: 18,
        min: 0,
        max: 1000
    };
}
