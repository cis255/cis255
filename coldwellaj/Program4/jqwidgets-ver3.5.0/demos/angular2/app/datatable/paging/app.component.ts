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
        localData: generatedata(200),
        dataType: "array",
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ]
    };

    dataAdapter = new $.jqx.dataAdapter(this.source);

    settings: jqwidgets.DataTableOptions =
    {
        width: 850,
        source: this.dataAdapter,
        pageable: true,
        pagerMode: 'advanced',
        altRows: true,
        columns: [
            { text: 'Name', dataField: 'firstname', width: 150 },
            { text: 'Last Name', dataField: 'lastname', width: 150 },
            { text: 'Product', editable: false, dataField: 'productname', width: 250 },
            { text: 'Quantity', dataField: 'quantity', width: 80, cellsAlign: 'right' },
            { text: 'Unit Price', dataField: 'price', width: 80, cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'Total', dataField: 'total', cellsAlign: 'right', cellsFormat: 'c2' }
        ]
    }  
}
