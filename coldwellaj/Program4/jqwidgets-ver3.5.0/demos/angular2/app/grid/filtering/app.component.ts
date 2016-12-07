/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from 'components/angular_jqxgrid';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';
import { jqxPanelComponent } from 'components/angular_jqxpanel';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    template: `<div id='jqxWidget' style="font-size: 13px; font-family: Verdana; float: left;">
                   <angularGrid #gridReference (onFilter)="onFilter()"></angularGrid>
                   <div id="eventslog" style="margin-top: 30px;">
                       <div style="width: 200px; float: left; margin-right: 10px;">
                           <angularButton #buttonReference (onClick)="clearFiltering()">Remove Filter</angularButton>
                           <angularCheckBox #filterBackground (onChange)="onFilterBackground($event)">Filter Background</angularCheckBox>
                           <angularCheckBox #filterIcons (onChange)="onFilterIcon($event)">Show All Filter Icons</angularCheckBox>                                
                       </div>
                       <div style="float: left;">
                           Event Log:
                           <angularPanel #panelReference></angularPanel>
                       </div>
                   </div>
               </div>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('gridReference') myGrid: jqxGridComponent;
    @ViewChild('buttonReference') clearFilteringButton: jqxButtonComponent;
    @ViewChild('filterBackground') filterBackgroundCheckBox: jqxCheckBoxComponent;
    @ViewChild('filterIcons') filterIconsCheckBox: jqxCheckBoxComponent;
    @ViewChild('panelReference') eventLogPanel: jqxPanelComponent;

    ngAfterViewInit(): void
    {
        this.eventLogPanel.createWidget({ width: 300, height: 80 });
        this.myGrid.createWidget(this.gridSettings);
        this.clearFilteringButton.createWidget({ width: 120 });
        this.filterBackgroundCheckBox.createWidget({ checked: true, height: 25 });
        this.filterIconsCheckBox.createWidget({ checked: false, height: 25 });

        // Set style on the Panel
        let panel = <HTMLElement>document.getElementsByTagName('angularPanel')[0].firstElementChild;
        panel.style.border = 'none';
    }

    onFilter(): void
    {
        this.eventLogPanel.clearcontent();
        let filterinfo = this.myGrid.getfilterinformation();
        let eventData = "Triggered 'filter' event";
        for (let i = 0; i < filterinfo.length; i += 1)
        {
            let eventData = "Filter Column: " + filterinfo[i].filtercolumntext;
            this.eventLogPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        }
    }

    clearFiltering(): void
    {
        this.myGrid.clearfilters();
    }

    onFilterBackground(event: any): void
    {
        let isChecked = event.args.checked;
        this.myGrid.showfiltercolumnbackground(isChecked);
    }

    onFilterIcon(event: any): void
    {
        let isChecked = event.args.checked;
        this.myGrid.autoshowfiltericon(!isChecked);
    }

    data = generatedata(500);

    source =
    {
        localdata: this.data,
        datafields:
        [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'date', type: 'date' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ],
        datatype: "array"
    };

    dataAdapter = new $.jqx.dataAdapter(this.source);

    addfilter = (): void =>
    {
        let filtergroup = new $.jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = 'Beate';
        let filtercondition = 'contains';
        let filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtervalue = 'Andrew';
        filtercondition = 'starts_with';
        let filter2 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filter_or_operator, filter1);
        filtergroup.addfilter(filter_or_operator, filter2);
        this.myGrid.addfilter('firstname', filtergroup);
        this.myGrid.applyfilters();
    }

    gridSettings: jqwidgets.GridOptions =
    {
        width: 850,
        source: this.dataAdapter,
        filterable: true,
        sortable: true,
        ready: (): void =>
        {
            this.addfilter();
        },
        autoshowfiltericon: true,
        columns: [
            { text: 'First Name', datafield: 'firstname', width: 160 },
            { text: 'Last Name', datafield: 'lastname', width: 160 },
            { text: 'Product', datafield: 'productname', width: 170 },
            { text: 'Order Date', datafield: 'date', filtertype: 'date', width: 160, cellsformat: 'dd-MMMM-yyyy' },
            { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
            { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
        ]
    };
}
