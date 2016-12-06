import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { jqxSplitterComponent } from 'components/angular_jqxsplitter';
import { jqxExpanderComponent } from 'components/angular_jqxexpander';
import { jqxTreeComponent }     from 'components/angular_jqxtree';
import { jqxPanelComponent }    from 'components/angular_jqxpanel';
import { jqxListBoxComponent }  from 'components/angular_jqxlistbox';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, jqxSplitterComponent, jqxExpanderComponent, jqxTreeComponent, jqxPanelComponent, jqxListBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

