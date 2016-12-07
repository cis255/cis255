/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDataTableComponent } from 'components/angular_jqxdatatable';

@Component({
    selector: 'my-app',
    template: '<angularDataTable #dataTableReference></angularDataTable>'
}) 

export class AppComponent implements AfterViewInit 
{ 
    @ViewChild('dataTableReference') myDataTable: jqxDataTableComponent;

    ngAfterViewInit(): void
    {
        this.myDataTable.createWidget(this.settings);
    } 
    
    source =
    {
        localdata: generatedata(85),
        datatype: "array",
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        sortcolumn: 'firstname',
        sortdirection: 'asc'
    };

    dataAdapter = new $.jqx.dataAdapter(this.source);

    settings: jqwidgets.DataTableOptions =
    {
        source: this.dataAdapter,
        sortable: true,
        pageable: true,
        altRows: true,
        columns: [
            { text: 'Name', dataField: 'firstname', width: 200 },
            { text: 'Last Name', dataField: 'lastname', width: 200 },
            { text: 'Product', editable: false, dataField: 'productname', width: 180 },
            { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsAlign: 'right' },
            { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
        ]
    }
}
