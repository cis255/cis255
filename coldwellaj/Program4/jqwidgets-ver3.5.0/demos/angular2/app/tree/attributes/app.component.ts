/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxExpanderComponent } from 'components/angular_jqxexpander';
import { jqxTreeComponent } from 'components/angular_jqxtree';

@Component({
    selector: 'my-app',
    template: `<angularExpander #expanderReference [width]='300' [height]='370' [showArrow]='false' [toggleMode]='none'> 
                  <div>
                      Folders
                  </div>
                  <div style="overflow: hidden;">
                      <angularTree #treeReference 
                          [width]='"100%"' [height]='"100%"' [source]='treeSource'>
                      </angularTree>
                  </div>
               </angularExpander>`,

    styles: [`
        angularTree > div:first-child
        {
            height: 100%;
            border: none;
        }
    `]
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('expanderReference') expander: jqxExpanderComponent;
    @ViewChild('treeReference') tree: jqxTreeComponent;

    ngAfterViewInit(): void 
    {
        this.expander.createWidget();
        this.tree.createWidget();
        this.tree.selectItem(null);
    }

    treeSource: Array<any> =
    [
        {
            icon: "../../images/mailIcon.png", label: "Mail", expanded: true,
            items:
            [
                { icon: "../../images/calendarIcon.png", label: "Calendar" },
                { icon: "../../images/contactsIcon.png", label: "Contacts", selected: true }
            ]
        },
        {
            icon: "../../images/folder.png", label: "Inbox", expanded: true,
            items:
            [
                { icon: "../../images/folder.png", label: "Admin" },
                { icon: "../../images/folder.png", label: "Corporate" },
                { icon: "../../images/folder.png", label: "Finance" },
                { icon: "../../images/folder.png", label: "Other" },
            ]
        },
        { icon: "../../images/recycle.png", label: "Deleted Items" },
        { icon: "../../images/notesIcon.png", label: "Notes" },
        { iconsize: 14, icon: "../../images/settings.png", label: "Settings" },
        { icon: "../../images/favorites.png", label: "Favorites" }
    ];
}
