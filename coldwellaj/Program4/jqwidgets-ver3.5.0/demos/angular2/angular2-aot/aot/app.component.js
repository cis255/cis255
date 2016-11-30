import { Component, ViewChild } from '@angular/core';
export class AppComponent {
    constructor() {
        this.barGaugeSettings = {
            colorScheme: "scheme02",
            width: 600,
            height: 600,
            max: 150,
            values: [102, 115, 130, 137],
            tooltip: {
                visible: true,
                formatFunction: (value) => {
                    let realVal = parseInt(value);
                    return ('Year: 2016<br/>Price Index:' + realVal);
                }
            }
        };
    }
    ngAfterViewInit() {
        this.myBarGauge.createWidget(this.barGaugeSettings);
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-app',
                template: `<angularBarGauge #barGaugeReference></angularBarGauge>`
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = [];
AppComponent.propDecorators = {
    'myBarGauge': [{ type: ViewChild, args: ['barGaugeReference',] },],
};
