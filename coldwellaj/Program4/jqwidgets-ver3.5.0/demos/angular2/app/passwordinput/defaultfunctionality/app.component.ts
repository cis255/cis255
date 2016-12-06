/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxPasswordInputComponent } from 'components/angular_jqxpasswordinput';
import { jqxExpanderComponent } from 'components/angular_jqxexpander';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';
import { jqxInputComponent } from 'components/angular_jqxinput';

@Component({
    selector: 'my-app',
    templateUrl: 'app/passwordinput/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('expander') expander: jqxExpanderComponent;
    @ViewChild('userName') userNameInput: jqxInputComponent;
    @ViewChild('password') passwordInput: jqxPasswordInputComponent;
    @ViewChild('passwordConfirm') passwordConfirmInput: jqxPasswordInputComponent;
    @ViewChild('submit') submit: jqxButtonComponent;

    ngAfterViewInit(): void
    {
        this.expander.createWidget
            ({
                toggleMode: 'none',
                width: '235px',
                showArrow: false,
                initContent: (): void =>
                {
                    this.userNameInput.createWidget({});
                    this.passwordConfirmInput.createWidget({});
                    this.submit.createWidget({ width: 150, height: 25 });
                    this.passwordInput.createWidget({ showStrength: true, showStrengthPosition: "right" });
                }
            });

        (<HTMLElement>document.getElementsByTagName('angularButton')[0].firstChild).style.marginTop = '0.8em';
        (<HTMLElement>document.getElementsByTagName('angularButton')[0].firstChild).style.marginLeft = '2em';
    }

    buttonClicked(): any 
    {
        let passwordValue = this.passwordInput.val();
        let confirmValue = this.passwordConfirmInput.val();
        let userNameValue = this.userNameInput.val();

        if (userNameValue.length === 0 || confirmValue.length === 0 || passwordValue === 0)
        {
            alert("You have an empty field!");
            this.userNameInput.val('');
            return false;
        }

        if (passwordValue === confirmValue)
        {
            alert("Submitting Data");
        } else
        {
            alert("Passwords do not match!");
        }

        this.passwordInput.val('');
        this.passwordConfirmInput.val('');
        this.userNameInput.val('');
    }
}
