/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { jqxSplitterComponent } from 'components/angular_jqxsplitter';
import { jqxExpanderComponent } from 'components/angular_jqxexpander';
import { jqxTreeComponent } from 'components/angular_jqxtree';
import { jqxPanelComponent } from 'components/angular_jqxpanel';
import { jqxListBoxComponent } from 'components/angular_jqxlistbox';

@Component({

    selector: 'my-app',
    templateUrl: 'app/splitter/defaultfunctionality/app.component.htm',
    styleUrls: ['app/splitter/defaultfunctionality/app.component.css']
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('mainSplitter') mainSplitter: jqxSplitterComponent;
    @ViewChild('contentSplitter') contentSplitter: jqxSplitterComponent;
    @ViewChild('feedExpander') feedExpander: jqxExpanderComponent;
    @ViewChild('feedContentExpander') feedContentExpander: jqxExpanderComponent;
    @ViewChild('feedListExpander') feedListExpander: jqxExpanderComponent;
    @ViewChild('treeReference') myTree: jqxTreeComponent;
    @ViewChild('listBoxReference') myListBox: jqxListBoxComponent;
    @ViewChild('panelReference') myPanel: jqxPanelComponent;

    constructor(public http: Http) { }

    ngAfterViewInit(): void 
    {
        //Set Styling on the components
        (<HTMLElement>document.getElementsByTagName('angularTree')[0].firstElementChild).style.height = '100%';
        (<HTMLElement>document.getElementsByTagName('angularTree')[0].firstElementChild).className += ' jqx-hideborder';
        (<HTMLElement>document.getElementsByTagName('angularSplitter')[1].firstElementChild).className += ' jqx-hideborder';
        (<HTMLElement>document.getElementsByTagName('angularExpander')[1].firstElementChild).className += ' jqx-hideborder';
        (<HTMLElement>document.getElementsByTagName('angularListBox')[0].firstElementChild).className += ' jqx-hideborder';
        (<HTMLElement>document.getElementsByTagName('angularPanel')[0].firstElementChild).className += ' jqx-hideborder';

        this.mainSplitter.createWidget(this.mainSplitterSettings);
        this.contentSplitter.createWidget(this.contentSplitterSettings);
        this.feedExpander.createWidget(this.feedExpanderSettings);
        this.feedContentExpander.createWidget(this.feedContentExpanderSettings);
        this.feedListExpander.createWidget(this.feedListExpanderSettings);
        this.myPanel.createWidget(this.myPanelSettings);
        this.getFeed('sciencedaily');
    }

    onTreeSelect(event: any): void
    {
        let item = this.myTree.getItem(event.args.element);
        this.getFeed(this.config['feeds'][item.label]);
    }

    onListBoxSelect(event: any): void
    {
        this.loadContent(event.args.index);
    }

    selectFirst(): void
    {
        this.myListBox.selectIndex(0);
        this.loadContent(0);
    }

    getFeed(feed: any): void
    {
        this.config['currentFeed'] = feed;
        if (feed !== undefined)
        {
            feed = this.config['dataDir'] + '/' + feed + '.' + this.config['format'];
            this.loadFeed(feed);
        }
    }

    loadFeed(feed: any, callback?: any): void
    {
        let response;
        this.http.get(feed)
            .map(res => res.json())
            .subscribe(
            data => response = data,
            err => console.log(err),
            () =>
            {
                let channel = response.rss.channel;
                this.config['currentFeedContent'] = channel.item;
                this.displayFeedList(this.config['currentFeedContent']);
                this.displayFeedHeader(channel.title);
                this.selectFirst();
            }
            );
    }

    displayFeedHeader(header: string): void
    {
        this.feedListExpander.setHeaderContent(header);
    }

    displayFeedList(items: any): void 
    {
        let headers = this.getHeaders(items);
        this.myListBox.source(headers);
    }

    getHeaders(items: any): any 
    {
        let headers = [], header;
        for (let i = 0; i < items.length; i += 1)
        {
            header = items[i].title;
            headers.push(header);
        }
        return headers
    }

    loadContent(index: number): void
    {
        let item = this.config['currentFeedContent'][index];
        if (item != null)
        {
            this.myPanel.clearcontent();
            this.myPanel.prepend('<div style="padding: 1px;"><span>' + item.description + '</span></div>');
            this.addContentHeaderData(item);
            this.config['selectedIndex'] = index;
        }
    }

    addContentHeaderData(item: any): void
    {
        let link = document.createElement('a');
        link.style.whiteSpace = 'nowrap';
        link.style.marginLeft = '15px';
        link.target = '_blank';
        let text = document.createTextNode('Source');
        link.appendChild(text);
        let date = document.createElement('div');
        date.style.whiteSpace = 'nowrap';
        date.style.marginLeft = '30px';
        date.appendChild(document.createTextNode(item.pubDate));
        let container = (<HTMLElement>document.createElement('table'));
        container.style.height = '100%';
        let element1 = (<HTMLElement>document.createElement('tr'));
        container.appendChild(element1);
        container.appendChild(document.createElement('td'));
        container.appendChild(document.createElement('td'));
        link.href = item.link;
        (<HTMLElement>document.getElementById('feedItemHeader')).innerHTML = null;
        (<HTMLElement>document.getElementById('feedItemHeader')).appendChild(container);
        container.getElementsByTagName('td')[0].appendChild(link);
        container.querySelector('td:last-child').appendChild(date);
        this.feedContentExpander.setHeaderContent(container.outerHTML);
    }

    mainSplitterSettings: jqwidgets.SplitterOptions =
    {
        width: 850,
        height: 600,
        panels: [
            {
                size: 200,
                min: 100
            },
            {
                min: 200,
                size: 400
            }
        ]
    };
    contentSplitterSettings: jqwidgets.SplitterOptions =
    {
        width: '100%',
        height: '100%',
        orientation: 'horizontal',
        panels: [
            {
                size: 400,
                min: 100,
                collapsible: false
            },
            {
                min: 100,
                collapsible: true
            }
        ]
    };
    feedExpanderSettings: jqwidgets.ExpanderOptions =
    {
        toggleMode: 'none',
        showArrow: false,
        width: "100%",
        height: "100%",
        initContent: (): void =>
        {
            this.myTree.createWidget({ height: '100%', width: '100%' });
        }
    };
    myListBoxSettings: jqwidgets.PanelOptions =
    {
        width: '100%',
        height: '100%',
        source: ['1']
    }
    feedListExpanderSettings: jqwidgets.ExpanderOptions =
    {
        toggleMode: 'none',
        showArrow: false,
        width: "100%",
        height: "100%",
        initContent: (): void =>
        {
            this.myListBox.createWidget(this.myListBoxSettings);
        }
    }
    myPanelSettings: jqwidgets.PanelOptions =
    {
        width: '100%',
        height: '100%'
    };
    feedContentExpanderSettings =
    {
        toggleMode: 'none',
        showArrow: false,
        width: "100%",
        height: "100%",
        initContent: (): void =>
        {
            this.myPanel.createWidget(this.myPanelSettings);
        }
    };

    config: any =
    {
        feeds: { 'CNN.com': 'cnn', 'Geek.com': 'geek', 'ScienceDaily': 'sciencedaily' },
        format: 'txt',
        dataDir: 'app/splitter/defaultfunctionality/data',
        feedTree: (<HTMLElement>document.getElementsByTagName('angularTree')[0]),
        feedItemHeader: (<HTMLElement>document.getElementById('feedItemHeader')),
        feedUpperPanel: (<HTMLElement>document.getElementById('feedUpperPanel')),
        feedHeader: (<HTMLElement>document.getElementById('feedHeader')),
        feedContentArea: (<HTMLElement>document.getElementById('feedContentArea')),
        selectedIndex: -1,
        currentFeed: '',
        currentFeedContent: {}
    }
}
