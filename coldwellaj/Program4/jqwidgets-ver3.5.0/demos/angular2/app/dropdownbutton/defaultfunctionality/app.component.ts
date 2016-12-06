/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDropDownButtonComponent } from 'components/angular_jqxdropdownbutton';
import { jqxTreeComponent } from 'components/angular_jqxtree';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    templateUrl: `app/dropdownbutton/defaultfunctionality/app.component.htm`
})

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('dropDownButtonReference') myDropDownButton: jqxDropDownButtonComponent;
    @ViewChild('treeReference') myTree: jqxTreeComponent;
    @ViewChild('checkBoxReference') myCheckBox: jqxCheckBoxComponent;

    ngAfterViewInit(): void
    {
        this.myDropDownButton.createWidget({ width: 150, height: 25 });
        this.myTree.createWidget({ width: 200 });
        this.myCheckBox.createWidget({ }); 

        this.myDropDownButton.setContent('<div style="position: relative; margin-left: 3px; margin-top: 5px;">Home</div>');
    }   

    treeOnSelect(event)
    {
        let item = this.myTree.getItem(event.args.element);
        let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + item.label + '</div>';
        this.myDropDownButton.setContent(dropDownContent);
    }

    checkBoxOnChange(event)
    {
        let isChecked = event.args.checked;
        this.myDropDownButton.autoOpen(isChecked);
    }
}
