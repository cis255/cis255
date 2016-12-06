/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxNotificationComponent } from 'components/angular_jqxnotification';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    templateUrl: 'app/notification/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('msgNotification') msgNotification: jqxNotificationComponent;
    @ViewChild('timeNotification') timeNotification: jqxNotificationComponent;
    @ViewChild('openMessageNotification') openMessageNotificationButton: jqxButtonComponent;
    @ViewChild('openTimeNotification') openTimeNotificationButton: jqxButtonComponent;

    ngAfterViewInit(): void
    {
        this.msgNotification.createWidget(this.notificationSettings);

        this.notificationSettings.template = 'time';
        this.timeNotification.createWidget(this.notificationSettings);

        this.openMessageNotificationButton.createWidget({ width: 230, height: 30 });
        this.openTimeNotificationButton.createWidget({ width: 230, height: 30 });

        (<HTMLElement>document.getElementsByTagName('angularButton')[0].firstElementChild).style.boxSizing = 'border-box';
        (<HTMLElement>document.getElementsByTagName('angularButton')[0].firstElementChild).style.paddingTop = '5px';

        (<HTMLElement>document.getElementsByTagName('angularButton')[1].firstElementChild).style.boxSizing = 'border-box';
        (<HTMLElement>document.getElementsByTagName('angularButton')[1].firstElementChild).style.paddingTop = '5px';
        (<HTMLElement>document.getElementsByTagName('angularButton')[1].firstElementChild).style.marginTop = '10px';
    }

    onClickOpenMessageNotification(): void
    {
        this.msgNotification.open();
    }

    onClickOpenTimeNotification(): void
    {
        let date = new Date();
        let minutes = date.getMinutes();
        let minutesString: String = '';
        if (minutes < 10)
        {
            minutesString = "0" + minutes;
        } else
        {
            minutesString = "" + minutes;
        }

        let seconds = date.getSeconds();
        let secondsString: String = '';
        if (seconds < 10)
        {
            secondsString = "0" + seconds;
        } else
        {
            secondsString = "" + seconds;
        }

        let timeSpan = document.getElementById('currentTime');
        timeSpan.innerText = date.getHours() + ":" + minutesString + ":" + secondsString;
        this.timeNotification.open();
    }

    notificationSettings: jqwidgets.NotificationOptions =
    {
        width: 250, position: "top-right", opacity: 0.9,
        autoOpen: false, animationOpenDelay: 800,
        autoClose: true, autoCloseDelay: 3000,
        template: "info"
    };
}
