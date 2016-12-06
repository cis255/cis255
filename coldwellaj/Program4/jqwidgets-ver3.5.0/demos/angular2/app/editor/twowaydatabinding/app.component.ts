/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxEditorComponent } from 'components/angular_jqxeditor';

@Component({
    selector: 'my-app',
    template: 
        `<fieldset style="width: 650px; margin-top:1em; margin-bottom: 1em">
            {{ value | json }}
        </fieldset>
        <angularEditor #editorReference [(ngModel)]='value'>
            &lt;b&gt;jqxEditor&lt;/b&gt; is a HTML text editor.
        </angularEditor>`
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

    value: string;
}
