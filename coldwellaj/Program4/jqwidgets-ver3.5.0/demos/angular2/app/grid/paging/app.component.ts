/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from 'components/angular_jqxgrid';
import { jqxPanelComponent } from 'components/angular_jqxpanel';

@Component({
    selector: 'my-app',
    template: `<angularGrid #gridReference (onPagechanged)="onPageChanged($event)" (onPagesizechanged)="onPageSizeChanged($event)"></angularGrid>
               <div id="eventslog" style="display: none; margin-top: 30px;">
                   <div style="float: left;">
                       Event Log:
                       <angularPanel #panelReference></angularPanel>
                       <div style="border: none;" id="events"></div>
                   </div>
                   <div style="float: left;">
                       Paging Details:
                       <div id="paginginfo"></div>
                   </div>
               </div>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('gridReference') myGrid: jqxGridComponent;
    @ViewChild('panelReference') myPanel: jqxPanelComponent;

    ngAfterViewInit(): void
    {
        this.myGrid.createWidget(this.settings);
        this.myPanel.createWidget({ width: 300, height: 300 });

        // Set style on the Panel
        let panel = <HTMLElement>document.getElementsByTagName('angularPanel')[0].firstElementChild;
        panel.style.border = 'none';
    }

    onPageChanged(event: any): void
    {
        document.getElementById('eventslog').style.display = 'block';;
        let loggedElements = document.getElementsByClassName('logged');
        if (loggedElements.length >= 5)
        {
            this.myPanel.clearcontent();
        }
        let args = event.args;
        let eventData = "pagechanged <div>Page:" + args.pagenum + ", Page Size: " + args.pagesize + "</div>";
        this.myPanel.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
        // get page information.
        let paginginformation = this.myGrid.getpaginginformation();
        let paginginfoDom = document.getElementById('paginginfo');
        paginginfoDom.innerHTML = "<div style='margin-top: 5px;'>Page:" + paginginformation.pagenum + ", Page Size: " + paginginformation.pagesize + ", Pages Count: " + paginginformation.pagescount + "</div>";
    }

    onPageSizeChanged(event: any): void
    {
        document.getElementById('eventslog').style.display = 'block';
        this.myPanel.clearcontent();
        let args = event.args;
        let eventData = "pagesizechanged <div>Page:" + args.pagenum + ", Page Size: " + args.pagesize + ", Old Page Size: " + args.oldpagesize + "</div>";
        this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        // get page information.
        let paginginformation = this.myGrid.getpaginginformation();
        let paginginfoDom = document.getElementById('paginginfo');
        paginginfoDom.innerHTML = "<div style='margin-top: 5px;'>Page:" + paginginformation.pagenum + ", Page Size: " + paginginformation.pagesize + ", Pages Count: " + paginginformation.pagescount + "</div>";
    }

    source =
    {
        datatype: "xml",
        datafields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
        ],
        root: "entry",
        record: "content",
        id: 'm\\:properties>d\\:OrderID',
        url: "../sampledata/orders.xml"
    };

    dataAdapter = new $.jqx.dataAdapter(this.source);

    settings: jqwidgets.GridOptions =
    {
        width: 850,
        source: this.dataAdapter,
        selectionmode: 'multiplerowsextended',
        sortable: true,
        pageable: true,
        autoheight: true,
        columnsresize: true,
        columns: [
            { text: 'Ship Name', datafield: 'ShipName', width: 250 },
            { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
            { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
            { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
            { text: 'Ship City', datafield: 'ShipCity', width: 100 },
            { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
        ]
    };
}
