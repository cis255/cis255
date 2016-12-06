/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxFileUploadComponent } from 'components/angular_jqxfileupload';

@Component({
    selector: 'my-app',
    template: `<angularFileUpload #fileUploadReference></angularFileUpload>`
}) 

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('fileUploadReference') myFileUpload: jqxFileUploadComponent;

    ngAfterViewInit(): void
    {
        this.myFileUpload.createWidget(this.settings);
    }   

    settings: jqwidgets.FileUploadOptions =
    {
        width: 300, uploadUrl: 'imageUpload.php', fileInputName: 'fileToUpload'
    }  
}
