/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSliderComponent } from 'components/angular_jqxslider';
import { jqxCheckBoxComponent } from 'components/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    template: `<div style="width: 550px">
                    <div style="height: 180px;">
                        <div style="float: left">
                            <span style="font-style: italic;">Red</span>
                            <angularSlider #redSlider (onChange)='redSliderOnChange()'></angularSlider>
                            <span style="font-style: italic;">Green</span>
                            <angularSlider #greenSlider (onChange)='greenSliderOnChange()'></angularSlider>
                            <span style="font-style: italic;">Blue</span>
                            <angularSlider #blueSlider (onChange)='blueSliderOnChange()'></angularSlider>
                        </div>
                        <div class="jqx-rc-all" id="colorBlock">
                            <div id="colorLabel"></div>
                        </div>
                    </div>
                   <angularCheckBox #checkBoxReference (onChange)='checkBoxOnChange($event)'>Smooth Thumb Drag</angularCheckBox>
                </div>`,
    styles: [`
        #colorBlock
        {
            border: 1px solid #aaa;
            width: 200px;
            height: 200px;
            float: right;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            border-radius: 5px;
        }
        #colorLabel
        {
            padding: 6px;           
        }
    `]
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('redSlider') redSlider: jqxSliderComponent;
    @ViewChild('greenSlider') greenSlider: jqxSliderComponent;
    @ViewChild('blueSlider') blueSlider: jqxSliderComponent;
    @ViewChild('checkBoxReference') myCheckBox: jqxSliderComponent;

    ngAfterViewInit(): void 
    {
        this.redSlider.createWidget(this.redSlidersettings);
        this.greenSlider.createWidget(this.greenSlidersettings);
        this.blueSlider.createWidget(this.blueSlidersettings);
        this.myCheckBox.createWidget({ checked: false, width: 200 });

        this.setColor();
    }

    redSliderOnChange(): void 
    {
        this.setColor();
    }
    greenSliderOnChange(): void 
    {
        this.setColor();
    }
    blueSliderOnChange(): void 
    {
        this.setColor();
    }

    checkBoxOnChange(event: any): void
    {
        let checked = event.args.checked;
        let value = 'default';
        if (!checked)
        {
            value = 'fixed';
        }
        this.redSlider.mode(value);
        this.greenSlider.mode(value);
        this.blueSlider.mode(value);
    }

    setColor(): void
    {
        let red = this.fixHex(Math.round(this.redSlider.value()).toString(16)),
            green = this.fixHex(Math.round(this.greenSlider.value()).toString(16)),
            blue = this.fixHex(Math.round(this.blueSlider.value()).toString(16));
        document.getElementById('colorBlock').style.backgroundColor = '#' + red + green + blue;
        document.getElementById('colorLabel').innerHTML = ('#' + red + green + blue).toUpperCase();
        let color = this.getTextElement({ r: parseInt(red, 16), g: parseInt(green, 16), b: parseInt(blue, 16) });
        document.getElementById('colorLabel').style.color = color;
    }

    fixHex(hex: any): any
    {
        return (hex.length < 2) ? '0' + hex : hex;
    }

    getTextElement(color: any): any
    {
        let nThreshold = 105;
        let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        return foreColor;
    }

    redSlidersettings: jqwidgets.SliderOptions =
    {
        showTickLabels: true, tooltip: true, mode: "fixed", height: 60, min: 0, max: 255, ticksFrequency: 25.5, value: 0, step: 25.5,
        tickLabelFormatFunction: (value) =>
        {
            if (value == 0) return value;
            if (value == 255) return value;
            return "";
        },
        tooltipFormatFunction: (value) =>
        {
            if (this.redSlider.mode() === 'default')
            {
                if (value < 10) return new Number(value.toPrecision(3));
                if (value > 10 && value < 100) return new Number(value.toPrecision(4));
                else return new Number(value.toPrecision(5));
            }
            else
            {
                if (value < 10) return new Number(value.toPrecision(3));
                if (value > 10 && value < 256) return new Number(value.toPrecision(4));
            }
        }
    };

    greenSlidersettings: jqwidgets.SliderOptions =
    {
        showTickLabels: true, tooltip: true, mode: "fixed", height: 60, min: 0, max: 255, ticksFrequency: 25.5, value: 0, step: 25.5,
        tickLabelFormatFunction: (value) =>
        {
            if (value == 0) return value;
            if (value == 255) return value;
            return "";
        },
        tooltipFormatFunction: (value) =>
        {
            if (this.greenSlider.mode() === 'default')
            {
                if (value < 10) return new Number(value.toPrecision(3));
                if (value > 10 && value < 100) return new Number(value.toPrecision(4));
                else return new Number(value.toPrecision(5));
            }
            else
            {
                if (value < 10) return new Number(value.toPrecision(3));
                if (value > 10 && value < 256) return new Number(value.toPrecision(4));
            }
        }
    };

    blueSlidersettings: jqwidgets.SliderOptions =
    {
        showTickLabels: true, tooltip: true, mode: "fixed", height: 60, min: 0, max: 255, ticksFrequency: 25.5, value: 255, step: 25.5,
        tickLabelFormatFunction: (value) =>
        {
            if (value == 0) return value;
            if (value == 255) return value;
            return "";
        },
        tooltipFormatFunction: (value) =>
        {
            if (this.blueSlider.mode() === 'default')
            {
                if (value < 10) return new Number(value.toPrecision(3));
                if (value > 10 && value < 100) return new Number(value.toPrecision(4));
                else return new Number(value.toPrecision(5));
            }
            else
            {
                if (value < 10) return new Number(value.toPrecision(3));
                if (value > 10 && value < 256) return new Number(value.toPrecision(4));
            }
        }
    };
}
