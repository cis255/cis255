/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTextAreaComponent } from 'components/angular_jqxtextarea';

@Component({
    selector: 'my-app',
    template: 
        `<fieldset style="width: 272px; margin-top:1em; margin-bottom: 1em">
            Value is {{ value | json }}
        </fieldset>
        <angularTextArea #textAreaReference [(ngModel)]='value'></angularTextArea>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('textAreaReference') textArea: jqxTextAreaComponent;

    ngAfterViewInit(): void 
    {
        this.textArea.createWidget(this.settings);
    }

    generateSource(): Array<String>
    {
        let quotes: Array<String> = [];

        quotes.push('Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.');
        quotes.push('Yesterday is not ours to recover, but tomorrow is ours to win or lose.');
        quotes.push('It does not matter how slowly you go as long as you do not stop.');
        quotes.push('Success depends upon previous preparation, and without such preparation there is sure to be failure.');
        quotes.push('Better a diamond with a flaw than a pebble without.');
        quotes.push('To succeed in life, you need two things: ignorance and confidence.');
        quotes.push('A successful man is one who can lay a firm foundation with the bricks others have thrown at him.');
        quotes.push('Sleep is the best meditation.');

        return quotes;
    }

    value: string = "";

    settings: jqwidgets.TextAreaOptions =
    {
        placeHolder: 'Enter a sentence', height: 90, width: 300, minLength: 1, source: this.generateSource()
    }
}
