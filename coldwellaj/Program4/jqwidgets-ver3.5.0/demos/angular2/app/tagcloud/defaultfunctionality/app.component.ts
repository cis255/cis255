/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTagCloudComponent } from 'components/angular_jqxtagcloud';

@Component({
    selector: 'my-app',
    template: '<angularTagCloud #tagCloudReference></angularTagCloud>'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('tagCloudReference') tagCloud: jqxTagCloudComponent;

    ngAfterViewInit(): void 
    {
        this.tagCloud.createWidget(this.settings);
    }

    generateData(): any
    {
        let data: Array<any> = [];

        data.push
            (
                { countryName: "Australia", technologyRating: 35 },
                { countryName: "United States", technologyRating: 60 },
                { countryName: "Germany", technologyRating: 55 },
                { countryName: "Brasil", technologyRating: 20 },
                { countryName: "United Kingdom", technologyRating: 50 },
                { countryName: "Japan", technologyRating: 80 }
            );

        return data;
    }

    source =
    {
        localdata: this.generateData(),
        datatype: "array",
        datafields: [
            { name: 'countryName' },
            { name: 'technologyRating' }
        ]
    }

    dataAdapter = new $.jqx.dataAdapter(this.source, {});

    settings: jqwidgets.TagCloudOptions =
    {
        width: '600px',
        source: this.dataAdapter,
        displayMember: 'countryName',
        valueMember: 'technologyRating'
    }
}
