/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit  } from '@angular/core';

import { jqxGridComponent } from 'components/angular_jqxgrid';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    template: `<angularGrid #gridReference></angularGrid><br />
               <angularButton #buttonReference (onClick)="clearFiltering()">Remove Filter</angularButton>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('gridReference') myGrid: jqxGridComponent;
    @ViewChild('buttonReference') clearFilteringButton: jqxButtonComponent;

    ngAfterViewInit(): void
    {
        this.myGrid.createWidget(this.settings);
        this.clearFilteringButton.createWidget({ width: 120, height: 30 });
    }

    clearFiltering(): void
    {
        this.myGrid.clearfilters();
    }

    data = generatedata(500);

    source =
    {
        localdata: this.data,
        datafields:
        [
            { name: 'name', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' }
        ],
        datatype: "array"
    };

    dataAdapter = new $.jqx.dataAdapter(this.source);

    settings: jqwidgets.GridOptions =
    {
        width: 850,
        source: this.dataAdapter,
        showfilterrow: true,
        filterable: true,
        selectionmode: 'multiplecellsextended',
        columns:
        [
            {
                text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215
            },
            {
                text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220
            },
            {
                text: 'Available', datafield: 'available', columntype: 'checkbox', filtertype: 'bool', width: 67
            },
            {
                text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd'
            },
            {
                text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right'
            }
        ]
    };
}