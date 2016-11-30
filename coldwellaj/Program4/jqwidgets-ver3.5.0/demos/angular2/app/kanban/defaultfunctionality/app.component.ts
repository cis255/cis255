/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSplitterComponent } from 'components/angular_jqxsplitter';
import { jqxKanbanComponent } from 'components/angular_jqxkanban';

@Component({
    selector: 'my-app',
    template: `<angularSplitter #mainSplitter>
                   <angularKanban id="kanban1" #first></angularKanban>
                   <angularSplitter #rightSplitter>
                       <angularKanban id="kanban2" #second></angularKanban>
                       <angularKanban id="kanban3" #third></angularKanban>
                   </angularSplitter>
               </angularSplitter>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('mainSplitter') mainSplitter: jqxSplitterComponent;
    @ViewChild('rightSplitter') rightSplitter: jqxSplitterComponent;
    @ViewChild("first") kanbanOne: jqxKanbanComponent;
    @ViewChild("second") kanbanTwo: jqxKanbanComponent;
    @ViewChild("third") kanbanThree: jqxKanbanComponent;

    ngAfterViewInit(): void
    {
        this.mainSplitter.createWidget(this.mainSplitterSettings);
        this.rightSplitter.createWidget(this.rightSplitterSettings);
        this.kanbanOne.createWidget(this.kanbanOneSettings);
        this.kanbanTwo.createWidget(this.kanbanTwoSettings);
        this.kanbanThree.createWidget(this.kanbanThreeSettings);
    }

    fields =
    [
        { name: "status", map: "state", type: "string" },
        { name: "text", map: "label", type: "string" },
        { name: "tags", type: "string" },
        { name: "color", map: "hex", type: "string" },
        { name: "resourceId", type: "number" }
    ];

    source =
    {
        localData:
        [
            { state: "new", label: "Combine Orders", tags: "orders, combine", hex: "#5dc3f0", resourceId: 3 },
            { state: "new", label: "Change Billing Address", tags: "billing", hex: "#f19b60", resourceId: 1 },
            { state: "new", label: "One item added to the cart", tags: "cart", hex: "#5dc3f0", resourceId: 3 },
            { state: "new", label: "Edit Item Price", tags: "price, edit", hex: "#5dc3f0", resourceId: 4 },
            { state: "new", label: "Login 404 issue", tags: "issue, login", hex: "#6bbd49" }
        ],
        dataType: "array",
        dataFields: this.fields
    };

    dataAdapter = new $.jqx.dataAdapter(this.source);

    source2 =
    {
        localData:
        [
            { state: "ready", label: "Logout issue", tags: "logout, issue", hex: "#5dc3f0", resourceId: 7 },
            { state: "ready", label: "Remember password issue", tags: "password, issue", hex: "#6bbd49", resourceId: 8 },
            { state: "ready", label: "Cart calculation issue", tags: "cart, calculation", hex: "#f19b60", resourceId: 9 },
            { state: "ready", label: "Remove topic issue", tags: "topic, issue", hex: "#6bbd49" }
        ],
        dataType: "array",
        dataFields: this.fields
    };

    dataAdapter2 = new $.jqx.dataAdapter(this.source2);

    source3 =
    {
        localData:
        [
            { state: "done", label: "Delete orders", tags: "orders, combine", hex: "#f19b60", resourceId: 4 },
            { state: "work", label: "Add New Address", tags: "address", hex: "#6bbd49", resourceId: 5 },
            { state: "new", label: "Rename items", tags: "rename", hex: "#5dc3f0", resourceId: 6 },
            { state: "work", label: "Update cart", tags: "cart, update", hex: "#6bbd49" }
        ],
        dataType: "array",
        dataFields: this.fields
    };

    dataAdapter3 = new $.jqx.dataAdapter(this.source3);

    resourcesAdapterFunc = (): any =>
    {
        let resourcesSource =
            {
                localData:
                [
                    { id: 0, name: "No name", image: "../../jqwidgets/styles/images/common.png", common: true },
                    { id: 1, name: "Andrew Fuller", image: "../../images/andrew.png" },
                    { id: 2, name: "Janet Leverling", image: "../../images/janet.png" },
                    { id: 3, name: "Steven Buchanan", image: "../../images/steven.png" },
                    { id: 4, name: "Nancy Davolio", image: "../../images/nancy.png" },
                    { id: 5, name: "Michael Buchanan", image: "../../images/Michael.png" },
                    { id: 6, name: "Margaret Buchanan", image: "../../images/margaret.png" },
                    { id: 7, name: "Robert Buchanan", image: "../../images/robert.png" },
                    { id: 8, name: "Laura Buchanan", image: "../../images/Laura.png" },
                    { id: 9, name: "Laura Buchanan", image: "../../images/Anne.png" }
                ],
                dataType: "array",
                dataFields:
                [
                    { name: "id", type: "number" },
                    { name: "name", type: "string" },
                    { name: "image", type: "string" },
                    { name: "common", type: "boolean" }
                ]
            };
        let resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    }

    kanbanOneSettings: jqwidgets.KanbanOptions =
    {
        width: '100%',
        height: '100%',
        columns:
        [
            {
                text: "Backlog", dataField: "new", maxItems: 10
            }
        ],
        source: this.dataAdapter,
        resources: this.resourcesAdapterFunc(),
        connectWith: "#kanban2, #kanban3",
        columnRenderer: (element: any, collapsedElement: any, column: any): void => 
        {
            let headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            let columnItems = this.kanbanOne.getColumnItems(column.dataField).length;
            headerStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
        }
    };

    kanbanTwoSettings: jqwidgets.KanbanOptions =
    {
        width: '100%',
        height: '100%',
        columns:
        [
            { text: "Ready", dataField: "ready", maxItems: 10 }
        ],
        source: this.dataAdapter2,
        resources: this.resourcesAdapterFunc(),
        connectWith: "#kanban1, #kanban3",
        columnRenderer: (element: any, collapsedElement: any, column: any): void => 
        {
            let headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            let columnItems = this.kanbanTwo.getColumnItems(column.dataField).length;
            headerStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
        }
    };

    kanbanThreeSettings: jqwidgets.KanbanOptions =
    {
        width: '100%',
        height: '100%',
        columns:
        [
            {
                text: "Backlog", dataField: "new", maxItems: 5
            },
            {
                text: "In Progress", dataField: "work", maxItems: 5
            },
            {
                text: "Done", dataField: "done", maxItems: 5
            }
        ],
        resources: this.resourcesAdapterFunc(),
        source: this.dataAdapter3,
        connectWith: "#kanban1, #kanban2",
        columnRenderer: (element: any, collapsedElement: any, column: any): void => 
        {
            let columnItems = this.kanbanThree.getColumnItems(column.dataField).length;
            let headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            headerStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
            let collapsedHeaderStatus = collapsedElement[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            collapsedHeaderStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
        }
    };

    mainSplitterSettings: jqwidgets.SplitterOptions =
    {
        width: 700, height: 600, panels: [{ size: 250, min: 100 }, { min: 250 }]
    };

    rightSplitterSettings: jqwidgets.SplitterOptions =
    {
        width: '100%', height: '100%', orientation: 'horizontal', panels: [{ min: 200, size: 350, collapsible: false }, { min: 200 }]
    };
}
