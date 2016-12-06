/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from 'components/angular_jqxgrid';

@Component({
    selector: 'my-app',
    template: `<angularGrid #gridReference (onCellBeginEdit)="cellBeginEditEvent($event)" (onCellEndEdit)="cellEndEditEvent($event)"></angularGrid>
               <div style="font-size: 12px; font-family: Verdana, Geneva, 'DejaVu Sans', sans-serif; margin-top: 30px;">
                   <div id="cellbegineditevent"></div>
                   <div style="margin-top: 10px;" id="cellendeditevent"></div>
               </div>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('gridReference') myGrid: jqxGridComponent;

    ngAfterViewInit(): void
    {
        this.myGrid.createWidget(this.settings);
    }

    cellBeginEditEvent(event: any): void
    {
        let args = event.args;
        let begineditLog = document.getElementById('cellbegineditevent');
        begineditLog.innerText = "Event Type: cellbeginedit, Column: " + args.datafield + ", Row: " + (1 + args.rowindex) + ", Value: " + args.value;
    }

    cellEndEditEvent(event: any): void
    {
        let args = event.args;
        let endeditLog = document.getElementById('cellendeditevent');
        endeditLog.innerText = "Event Type: cellendedit, Column: " + args.datafield + ", Row: " + (1 + args.rowindex) + ", Value: " + args.value;
    }

    data = generatedata(500);

    source =
    {
        localdata: this.data,
        datatype: "array",
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'date', type: 'date' }
        ]
    };

    dataAdapter = new $.jqx.dataAdapter(this.source);

    settings: jqwidgets.GridOptions =
    {
        width: 850,
        source: this.dataAdapter,
        editable: true,
        enabletooltips: true,
        selectionmode: 'multiplecellsadvanced',
        columns: [
            {
                text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120
            },
            {
                text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120
            },
            {
                text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195
            },
            {
                text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67
            },
            {
                text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd',
                validation: (cell: any, value: any): any =>
                {
                    if (value == "")
                        return true;

                    let year = value.getFullYear();
                    if (year >= 2017)
                    {
                        return { result: false, message: "Ship Date should be before 1/1/2017" };
                    }

                    return true;
                }
            },
            {
                text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
                validation: (cell: any, value: any): any =>
                {
                    if (value < 0 || value > 150)
                    {
                        return { result: false, message: "Quantity should be in the 0-150 interval" };
                    }
                    return true;
                },
                createeditor: function (row: any, cellvalue: any, editor: any): void
                {
                    editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                }
            },
            {
                text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                validation: (cell: any, value: any): any =>
                {
                    if (value < 0 || value > 15)
                    {
                        return { result: false, message: "Price should be in the 0-15 interval" };
                    }
                    return true;
                },
                createeditor: function (row: any, cellvalue: any, editor: any): void
                {
                    editor.jqxNumberInput({ digits: 3 });
                }
            }
        ]
    };
}
