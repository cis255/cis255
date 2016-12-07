import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { jqxBarGaugeComponent } from './jqwidgets-ts/angular_jqxbargauge';
export class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule],
                declarations: [AppComponent, jqxBarGaugeComponent],
                bootstrap: [AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = [];
