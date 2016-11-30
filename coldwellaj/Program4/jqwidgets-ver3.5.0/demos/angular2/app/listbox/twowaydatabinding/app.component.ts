/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxListBoxComponent } from 'components/angular_jqxlistbox';

@Component({
    selector: 'my-app',
    template: 
       `<fieldset style="width: 200px; margin-top:1em; margin-bottom: 1em">
            Value is {{ value | json }}
        </fieldset>
        <angularListBox #listBoxReference [(ngModel)]='value'></angularListBox>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('listBoxReference') myListBox: jqxListBoxComponent;

    ngAfterViewInit(): void
    {
        this.myListBox.createWidget(this.settings);
    }

    source: Array<String> =
    [
        "Affogato",
        "Americano",
        "Bicerin",
        "Breve",
        "Café Bombón",
        "Café au lait",
        "Caffé Corretto",
        "Café Crema",
        "Caffé Latte",
        "Caffé macchiato",
        "Café mélange",
        "Coffee milk",
        "Cafe mocha",
        "Cappuccino",
        "Carajillo",
        "Cortado",
        "Cuban espresso",
        "Espresso",
        "Eiskaffee",
        "The Flat White",
        "Frappuccino",
        "Galao",
        "Greek frappé coffee",
        "Iced Coffee﻿",
        "Indian filter coffee",
        "Instant coffee",
        "Irish coffee",
        "Liqueur coffee"
    ];

    value: string;

    settings: jqwidgets.ListBoxOptions =
    {
        width: 200,
        height: 250,
        selectedIndex: 3,
        source: this.source
    };
}
