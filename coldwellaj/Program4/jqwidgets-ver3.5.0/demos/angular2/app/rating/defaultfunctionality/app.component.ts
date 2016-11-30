/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxRatingComponent } from 'components/angular_jqxrating';

@Component({
    selector: 'my-app',
    template: `<div style="margin-top: 10px;">
                   <angularRating #ratingReference (onChange)="onChange($event)"></angularRating>
               </div>
               <div style="float: left;">Rating:</div>
               <div id="rate"></div>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('ratingReference') myRating: jqxRatingComponent;

    ngAfterViewInit(): void
    {
        this.myRating.createWidget({ width: 350, height: 35 });
    }

    onChange(event)
    {
        (<HTMLElement>document.getElementById('rate')).innerHTML = '<span>' + event.value + '</span';
    }
}
