/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxEditorComponent } from 'components/angular_jqxeditor';

@Component({
    selector: 'my-app',
    templateUrl: `app/editor/defaultfunctionality/app.component.htm`
})

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('editorReference') myEditor: jqxEditorComponent;

    ngAfterViewInit(): void
    {
        this.myEditor.createWidget({ }); 

        (<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularEditor')[0]).childNodes[0]).style.width = '800px';
        (<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularEditor')[0]).childNodes[0]).style.height = '400px';
        (<HTMLElement>document.getElementsByClassName('jqx-editor-content')[0]).style.height = '91%';
    }   
}
