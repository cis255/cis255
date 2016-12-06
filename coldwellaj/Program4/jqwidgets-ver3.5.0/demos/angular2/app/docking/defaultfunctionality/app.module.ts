import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxDockingComponent }  from 'components/angular_jqxdocking';
import { jqxCalendarComponent } from 'components/angular_jqxcalendar';
import { jqxTabsComponent }     from 'components/angular_jqxtabs';
import { jqxListBoxComponent }  from 'components/angular_jqxlistbox';
import { jqxPanelComponent }    from 'components/angular_jqxpanel';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxDockingComponent, jqxCalendarComponent, jqxTabsComponent, jqxListBoxComponent, jqxPanelComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

