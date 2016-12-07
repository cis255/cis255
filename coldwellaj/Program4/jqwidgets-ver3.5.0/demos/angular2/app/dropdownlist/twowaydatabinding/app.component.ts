/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDropDownListComponent } from 'components/angular_jqxdropdownlist';

@Component({
    selector: 'my-app',
    template: `
        <fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em">
            The value is {{ value | json }}
        </fieldset>
        <angularDropDownList #dropDownListReference [(ngModel)]='value'></angularDropDownList>`
}) 

export class AppComponent implements AfterViewInit  
{ 
    @ViewChild('dropDownListReference') myDropDownList: jqxDropDownListComponent;

    ngAfterViewInit(): void
    {
        this.myDropDownList.createWidget(this.settings);
    }   

    value: string;

    source: Array<String> =
    [
        "Affogato",
        "Americano",
        "Bicerin",
        "Breve",
        "Café Bombón",
        "Café au lait",
        "Caffé Corretto"
    ];  

    settings: jqwidgets.DropDownListOptions =
    {
        source: this.source, selectedIndex: 1, width: 200, height: 25, autoDropDownHeight: true
    }
}
