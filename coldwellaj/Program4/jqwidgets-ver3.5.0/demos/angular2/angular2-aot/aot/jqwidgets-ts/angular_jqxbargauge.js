import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxBarGaugeComponent {
    constructor(containerElement) {
        this.properties = ['animationDuration', 'backgroundColor', 'barSpacing', 'baseValue', 'colorScheme', 'customColorScheme', 'disabled', 'endAngle', 'formatFunction', 'height', 'labels', 'max', 'min', 'relativeInnerRadius', 'rendered', 'startAngle', 'title', 'tooltip', 'useGradient', 'values', 'width'];
        // jqxBarGaugeComponent events
        this.onDrawEnd = new EventEmitter();
        this.onDrawStart = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onTooltipClose = new EventEmitter();
        this.onTooltipOpen = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                let areEqual;
                if (this[attrName]) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxBarGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxBarGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxBarGauge(this.properties[i])) {
                        this.host.jqxBarGauge(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    }
    arraysEqual(attrValue, hostValue) {
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    createWidget(options) {
        if (options) {
            $.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = $(this.elementRef.nativeElement.firstChild);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBarGauge', options);
        this.__updateRect__();
    }
    __updateRect__() {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxBarGauge('setOptions', options);
    }
    // jqxBarGaugeComponent properties
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxBarGauge('animationDuration');
        }
    }
    backgroundColor(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('backgroundColor', arg);
        }
        else {
            return this.host.jqxBarGauge('backgroundColor');
        }
    }
    barSpacing(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('barSpacing', arg);
        }
        else {
            return this.host.jqxBarGauge('barSpacing');
        }
    }
    baseValue(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('baseValue', arg);
        }
        else {
            return this.host.jqxBarGauge('baseValue');
        }
    }
    colorScheme(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxBarGauge('colorScheme');
        }
    }
    customColorScheme(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('customColorScheme', arg);
        }
        else {
            return this.host.jqxBarGauge('customColorScheme');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('disabled', arg);
        }
        else {
            return this.host.jqxBarGauge('disabled');
        }
    }
    endAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('endAngle', arg);
        }
        else {
            return this.host.jqxBarGauge('endAngle');
        }
    }
    formatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('formatFunction', arg);
        }
        else {
            return this.host.jqxBarGauge('formatFunction');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('height', arg);
        }
        else {
            return this.host.jqxBarGauge('height');
        }
    }
    labels(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('labels', arg);
        }
        else {
            return this.host.jqxBarGauge('labels');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('max', arg);
        }
        else {
            return this.host.jqxBarGauge('max');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('min', arg);
        }
        else {
            return this.host.jqxBarGauge('min');
        }
    }
    relativeInnerRadius(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('relativeInnerRadius', arg);
        }
        else {
            return this.host.jqxBarGauge('relativeInnerRadius');
        }
    }
    rendered(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('rendered', arg);
        }
        else {
            return this.host.jqxBarGauge('rendered');
        }
    }
    startAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('startAngle', arg);
        }
        else {
            return this.host.jqxBarGauge('startAngle');
        }
    }
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('title', arg);
        }
        else {
            return this.host.jqxBarGauge('title');
        }
    }
    tooltip(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('tooltip', arg);
        }
        else {
            return this.host.jqxBarGauge('tooltip');
        }
    }
    useGradient(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('useGradient', arg);
        }
        else {
            return this.host.jqxBarGauge('useGradient');
        }
    }
    values(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('values', arg);
        }
        else {
            return this.host.jqxBarGauge('values');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('width', arg);
        }
        else {
            return this.host.jqxBarGauge('width');
        }
    }
    // jqxBarGaugeComponent functions
    refresh() {
        this.host.jqxBarGauge('refresh');
    }
    render() {
        this.host.jqxBarGauge('render');
    }
    val(value) {
        return this.host.jqxBarGauge('val', value);
    }
    __wireEvents__() {
        this.host.on('drawEnd', (eventData) => { this.onDrawEnd.emit(eventData); });
        this.host.on('drawStart', (eventData) => { this.onDrawStart.emit(eventData); });
        this.host.on('initialized', (eventData) => { this.onInitialized.emit(eventData); });
        this.host.on('tooltipClose', (eventData) => { this.onTooltipClose.emit(eventData); });
        this.host.on('tooltipOpen', (eventData) => { this.onTooltipOpen.emit(eventData); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); });
    }
}
jqxBarGaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'angularBarGauge',
                template: '<div><ng-content></ng-content></div>'
            },] },
];
/** @nocollapse */
jqxBarGaugeComponent.ctorParameters = [
    { type: ElementRef, },
];
jqxBarGaugeComponent.propDecorators = {
    'attrAnimationDuration': [{ type: Input, args: ['animationDuration',] },],
    'attrBackgroundColor': [{ type: Input, args: ['backgroundColor',] },],
    'attrBarSpacing': [{ type: Input, args: ['barSpacing',] },],
    'attrBaseValue': [{ type: Input, args: ['baseValue',] },],
    'attrColorScheme': [{ type: Input, args: ['colorScheme',] },],
    'attrCustomColorScheme': [{ type: Input, args: ['customColorScheme',] },],
    'attrDisabled': [{ type: Input, args: ['disabled',] },],
    'attrEndAngle': [{ type: Input, args: ['endAngle',] },],
    'attrFormatFunction': [{ type: Input, args: ['formatFunction',] },],
    'attrLabels': [{ type: Input, args: ['labels',] },],
    'attrMax': [{ type: Input, args: ['max',] },],
    'attrMin': [{ type: Input, args: ['min',] },],
    'attrRelativeInnerRadius': [{ type: Input, args: ['relativeInnerRadius',] },],
    'attrRendered': [{ type: Input, args: ['rendered',] },],
    'attrStartAngle': [{ type: Input, args: ['startAngle',] },],
    'attrTitle': [{ type: Input, args: ['title',] },],
    'attrTooltip': [{ type: Input, args: ['tooltip',] },],
    'attrUseGradient': [{ type: Input, args: ['useGradient',] },],
    'attrValues': [{ type: Input, args: ['values',] },],
    'attrWidth': [{ type: Input, args: ['width',] },],
    'attrHeight': [{ type: Input, args: ['height',] },],
    'onDrawEnd': [{ type: Output },],
    'onDrawStart': [{ type: Output },],
    'onInitialized': [{ type: Output },],
    'onTooltipClose': [{ type: Output },],
    'onTooltipOpen': [{ type: Output },],
    'onValueChanged': [{ type: Output },],
}; //jqxBarGaugeComponent
