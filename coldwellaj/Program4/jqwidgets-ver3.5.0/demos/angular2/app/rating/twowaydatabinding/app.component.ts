/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxRatingComponent } from 'components/angular_jqxrating';

@Component({
    selector: 'my-app',
    template:
        `<fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em">
            Value is {{ value | json }}
        </fieldset>
        <angularRating #ratingReference [(ngModel)]='value'></angularRating>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('ratingReference') myRating: jqxRatingComponent;

    ngAfterViewInit(): void
    {
        this.myRating.createWidget({ width: 350, height: 35, value: 3 });
    }

    value: number;
}
