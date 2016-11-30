/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    template: `<div><angularButton #button (onClick)="buttonClicked()">Button</angularButton></div>
               <div><angularButton #submitButton (onClick)="submitButtonClicked()">Submit</angularButton></div>
               <div><angularButton #imageButton (onClick)="imageButtonClicked()"></angularButton></div>
               <div><angularButton #textImageButton (onClick)="textImageButtonClicked()">Button</angularButton></div>
               <div><angularButton #htmlButton (onClick)="hTMLButtonClicked()"><span style='font-weight: bold;'>HTML Button</span></angularButton></div>
               <div><angularButton #disabledButton>Disabled</angularButton></div>
               <div style='margin-top:1em'>Events:</div>
               <div id='events'></div>`
})

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('button') myButton: jqxButtonComponent;
    @ViewChild('submitButton') mySubmitButton: jqxButtonComponent;
    @ViewChild('imageButton') myImageButton: jqxButtonComponent;
    @ViewChild('textImageButton') myTextImageButton: jqxButtonComponent;
    @ViewChild('htmlButton') myHTMLButton: jqxButtonComponent;
    @ViewChild('disabledButton') myDisabledButton: jqxButtonComponent;
      
    ngAfterViewInit(): void
    {
        this.myButton.createWidget({ width: 120, height: 40 });
        this.mySubmitButton.createWidget({ width: 120, height: 40 });
        this.myImageButton.createWidget({ width: 120, height: 40, imgSrc: '../../images/facebook.png' });
        this.myTextImageButton.createWidget({ width: 120, height: 40, textImageRelation: "imageBeforeText", textPosition: "left", imgSrc: "../../images/twitter.png" });
        this.myHTMLButton.createWidget({ width: 120, height: 40 });
        this.myDisabledButton.createWidget({ disabled: true, width: 120, height: 40 });

        let buttons = document.getElementsByClassName('jqx-button');
        for (let i = 1; i < buttons.length; i++)
        {
            (<HTMLElement>buttons[i]).style.marginTop = '20px';
        } 
    }   

    buttonClicked(): void
    {
        document.getElementById('events').innerHTML = '<span>Button Clicked</span>';
    }
    submitButtonClicked(): void
    {
        document.getElementById('events').innerHTML = '<span>Submit Button Clicked</span>';
    }
    imageButtonClicked(): void
    {
        document.getElementById('events').innerHTML = '<span>Image Button Clicked</span>';
    }
    textImageButtonClicked(): void
    {
        document.getElementById('events').innerHTML = '<span>Text/Image Button Clicked</span>';
        this.myTextImageButton.setOptions({ textImageRelation: "textBeforeImage", imgPosition: "left", textPosition: "center" });
    }
    hTMLButtonClicked(): void
    {
        document.getElementById('events').innerHTML = '<span>HTML Button Clicked</span>';
        this.myHTMLButton.value("<span style='font-style: italic; position: relative; right: 8px'>Thanks for clicking me!</span>");
    } 
}

