/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTreeComponent } from 'components/angular_jqxtree';
import { jqxPanelComponent } from 'components/angular_jqxpanel';
import { jqxResponsivePanelComponent } from 'components/angular_jqxresponsivepanel';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';


@Component({
    selector: 'my-app',
    templateUrl: 'app/responsivePanel/defaultfunctionality/app.component.htm',
    styleUrls: ['app/responsivePanel/defaultfunctionality/app.component.css']
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('treeReference') myTree: jqxTreeComponent;
    @ViewChild('panelReference') myPanel: jqxPanelComponent;
    @ViewChild('responsivePanelReference') RespPanel: jqxResponsivePanelComponent;
    @ViewChild('resizeSmall') resizeSmallButton: jqxButtonComponent;
    @ViewChild('resizeBig') resizeBigButton: jqxButtonComponent;

    ngAfterViewInit(): void 
    {
        this.myTree.createWidget({ width: '100%', height: '100%' });
        (<HTMLElement>document.getElementsByTagName("angularTree")[0].firstElementChild).style.visibility = "visible";
        (<HTMLElement>document.getElementsByTagName("angularTree")[0].firstElementChild).style.border = "none";

        this.RespPanel.createWidget(this.respPanelSettings);

        this.myPanel.createWidget({ width: '570px', height: '300px' });

        this.resizeSmallButton.createWidget({ width: 170, height: 25 });
        this.resizeBigButton.createWidget({ width: 170, height: 25 });
    }

    onOpen(): void 
    {
        this.RespPanel.width(150);
        this.myPanel.width(340);

        this.RespPanel.refresh();
    }

    onClickSmall(): void 
    {
        let ownerPanel = (<HTMLElement>document.getElementById("ownerPanel"));
        ownerPanel.style.width = '500px';

        (<HTMLElement>document.getElementsByTagName("angularResponsivePanel")[0].firstElementChild).style.display = "none";

        this.RespPanel.width(0)
        this.myPanel.width(490);

        this.RespPanel.refresh();
    }

    onClickBig(): void 
    {
        let ownerPanel = (<HTMLElement>document.getElementById("ownerPanel"));
        ownerPanel.style.width = '800px';

        (<HTMLElement>document.getElementsByTagName("angularResponsivePanel")[0].firstElementChild).style.display = "block";

        this.RespPanel.width(220);
        this.myPanel.width(570);

        this.RespPanel.refresh();
    }

    respPanelSettings: jqwidgets.ResponsivePanelOptions =
    {
        width: 220,
        height: 300,
        collapseBreakpoint: 200,
        toggleButton: '#toggleResponsivePanel',
        animationType: 'none',
        autoClose: false
    }
}
