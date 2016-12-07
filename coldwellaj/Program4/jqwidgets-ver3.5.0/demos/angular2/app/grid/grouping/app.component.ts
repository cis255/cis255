/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from 'components/angular_jqxgrid';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    templateUrl: 'app/grid/grouping/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('gridReference') myGrid: jqxGridComponent;
    @ViewChild('ExpandGroup') ExpandGroupButton: jqxButtonComponent;
    @ViewChild('CollapseGroup') CollapseGroupButton: jqxButtonComponent;
    @ViewChild('ExpandAllGroup') ExpandAllGroupButton: jqxButtonComponent;
    @ViewChild('CollapseAllGroup') CollapseAllGroupButton: jqxButtonComponent;

    ngAfterViewInit(): void
    {
        this.myGrid.createWidget(this.settings);
        this.ExpandGroupButton.createWidget({});
        this.CollapseGroupButton.createWidget({});
        this.ExpandAllGroupButton.createWidget({});
        this.CollapseAllGroupButton.createWidget({});

        let collapseButton = <HTMLElement>document.getElementsByTagName('angularButton')[1].firstElementChild;
        let collapseAllButton = <HTMLElement>document.getElementsByTagName('angularButton')[3].firstElementChild;
        collapseButton.style.marginTop = '10px';
        collapseAllButton.style.marginTop = '10px';
    }

    onExpandGroup(): void
    {
        let inputDom = <any>document.getElementById('groupnum');
        let groupnum = inputDom.value;
        if (!isNaN(groupnum))
        {
            this.myGrid.expandgroup(groupnum);
        }
    }

    onCollapseGroup(): void
    {
        let inputDom = <any>document.getElementById('groupnum');
        let groupnum = inputDom.value;
        if (!isNaN(groupnum))
        {
            this.myGrid.collapsegroup(groupnum);
        }
    }

    onExpandAllGroup(): void
    {
        this.myGrid.expandallgroups();
    }

    onCollapseAllGroup(): void
    {
        this.myGrid.collapseallgroups();
    }

    onGroupExpand(event: any): void
    {
        let args = event.args;
        let expandedgroupLog = document.getElementById('expandedgroup');
        expandedgroupLog.innerText = "Group: " + args.group + ", Level: " + args.level;
    }

    onGroupCollapse(event: any): void
    {
        let args = event.args;
        let collapsedgroupLog = document.getElementById('collapsedgroup');
        collapsedgroupLog.innerText = "Group: " + args.group + ", Level: " + args.level;
    }

    source =
    {
        datatype: "xml",
        datafields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
            { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
            { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
        ],
        root: "entry",
        record: "content",
        id: 'm\\:properties>d\\:CustomerID',
        url: "../sampledata/customers.xml"
    };

    dataAdapter = new $.jqx.dataAdapter(this.source);

    settings: jqwidgets.GridOptions =
    {
        width: 850,
        groupable: true,
        source: this.dataAdapter,
        columns: [
            { text: 'Company Name', datafield: 'CompanyName', width: 250 },
            { text: 'City', datafield: 'City', width: 120 },
            { text: 'Country', datafield: 'Country' }
        ],
        groups: ['City']
    };
}
