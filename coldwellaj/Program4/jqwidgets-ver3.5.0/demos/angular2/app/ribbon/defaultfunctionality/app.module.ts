import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxRibbonComponent }         from 'components/angular_jqxribbon';
import { jqxButtonComponent }         from 'components/angular_jqxbuttons';
import { jqxTooltipComponent }        from 'components/angular_jqxtooltip';
import { jqxDropDownButtonComponent } from 'components/angular_jqxdropdownbutton';
import { jqxColorPickerComponent }    from 'components/angular_jqxcolorpicker';
import { jqxDropDownListComponent }   from 'components/angular_jqxdropdownlist';
import { jqxGridComponent }           from 'components/angular_jqxgrid';
import { jqxToggleButtonComponent }   from 'components/angular_jqxtogglebutton';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxRibbonComponent, jqxButtonComponent, jqxTooltipComponent, jqxDropDownButtonComponent, jqxColorPickerComponent, jqxDropDownListComponent, jqxGridComponent, jqxToggleButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

