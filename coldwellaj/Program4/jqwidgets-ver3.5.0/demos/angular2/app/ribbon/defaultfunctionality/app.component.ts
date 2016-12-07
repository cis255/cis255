/// <reference path="components/jqwidgets.d.ts" />
import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxRibbonComponent } from 'components/angular_jqxribbon';
import { jqxButtonComponent } from 'components/angular_jqxbuttons';
import { jqxTooltipComponent } from 'components/angular_jqxtooltip';
import { jqxDropDownButtonComponent } from 'components/angular_jqxdropdownbutton';
import { jqxColorPickerComponent } from 'components/angular_jqxcolorpicker';
import { jqxDropDownListComponent } from 'components/angular_jqxdropdownlist';
import { jqxGridComponent } from 'components/angular_jqxgrid';
import { jqxToggleButtonComponent } from 'components/angular_jqxtogglebutton';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ribbon/defaultfunctionality/app.component.htm',
    styleUrls: ['app/ribbon/defaultfunctionality/app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit
{
    // Ribbon
    @ViewChild('ribbonReference') ribbon: jqxRibbonComponent;

    // DropDownButtons
    @ViewChild('fileItemButton') fileItemButton: jqxDropDownButtonComponent;
    @ViewChild('bucketColor') bucketColorButton: jqxDropDownButtonComponent;
    @ViewChild('fontColor') fontColorButton: jqxDropDownButtonComponent;
    @ViewChild('highlightColor') highlightColorButton: jqxDropDownButtonComponent;

    // Buttons
    @ViewChild('save') saveButton: jqxButtonComponent;
    @ViewChild('saveAs') saveAsButton: jqxButtonComponent;
    @ViewChild('open') openButton: jqxButtonComponent;
    @ViewChild('close') closeButton: jqxButtonComponent;
    @ViewChild('pasteButton') pasteButton: jqxButtonComponent;
    @ViewChild('help') helpButton: jqxButtonComponent;
    @ViewChild('about') aboutButton: jqxButtonComponent;
    @ViewChild('update') updateButton: jqxButtonComponent;
    @ViewChild('copyButton') copyButton: jqxButtonComponent;
    @ViewChild('cutButton') cutButton: jqxButtonComponent;
    @ViewChild('formatPainter') formatPainterButton: jqxButtonComponent;
    @ViewChild('shrinkFont') shrinkFontButton: jqxButtonComponent
    @ViewChild('growFont') growFontButton: jqxButtonComponent;
    @ViewChild('clearFormatting') clearFormattingButton: jqxButtonComponent;
    @ViewChild('alignLeft') alignLeftButton: jqxButtonComponent;
    @ViewChild('alignCenter') alignCenterButton: jqxButtonComponent;
    @ViewChild('alignRight') alignRightButton: jqxButtonComponent;
    @ViewChild('alignJustify') alignJustifyButton: jqxButtonComponent;
    @ViewChild('bulletList') bulletListButton: jqxButtonComponent;
    @ViewChild('numberedList') numberedListButton: jqxButtonComponent;
    @ViewChild('decreaseIndent') decreaseIndentButton: jqxButtonComponent;
    @ViewChild('increaseIndent') increaseIndentButton: jqxButtonComponent;
    @ViewChild('Sort') sortButton: jqxButtonComponent;
    @ViewChild('lineSpacing') lineSpacingButton: jqxButtonComponent;
    @ViewChild('showHide') showHideButton: jqxButtonComponent;

    // ToggleButtons
    @ViewChild('superscript') superScriptToggleButton: jqxToggleButtonComponent;
    @ViewChild('subscript') subscriptToggleButton: jqxToggleButtonComponent;
    @ViewChild('bold') boldToggleButton: jqxToggleButtonComponent;
    @ViewChild('italic') italicToggleButton: jqxToggleButtonComponent;
    @ViewChild('underline') underlineToggleButton: jqxToggleButtonComponent;
    @ViewChild('strikethrough') striketroughToggleButton: jqxToggleButtonComponent;


    // ToolTips
    @ViewChild('cutButtonToolTip') cutButtonToolTip: jqxTooltipComponent;
    @ViewChild('copyButtonToolTip') copyButtonToolTip: jqxTooltipComponent;
    @ViewChild('subscriptToolTip') subscriptToolTip: jqxTooltipComponent;
    @ViewChild('superscriptToolTip') superscriptToolTip: jqxTooltipComponent;
    @ViewChild('boldToolTip') boldToolTip: jqxTooltipComponent;
    @ViewChild('italicToolTip') italicToolTip: jqxTooltipComponent;
    @ViewChild('underlineToolTip') underlineToolTip: jqxTooltipComponent;
    @ViewChild('strikethroughToolTip') strikethroughToolTip: jqxTooltipComponent;
    @ViewChild('alignLeftToolTip') alignLeftToolTip: jqxTooltipComponent;
    @ViewChild('alignCenterToolTip') alignCenterToolTip: jqxTooltipComponent;
    @ViewChild('alignRightToolTip') alignRightToolTip: jqxTooltipComponent;
    @ViewChild('alignJustifyToolTip') alignJustifyToolTip: jqxTooltipComponent;
    @ViewChild('bulletListToolTip') bulletListToolTip: jqxTooltipComponent;
    @ViewChild('numberedListToolTip') numberedListToolTip: jqxTooltipComponent;
    @ViewChild('decreaseIndentToolTip') decreaseIndentToolTip: jqxTooltipComponent;
    @ViewChild('increaseIndentToolTip') increaseIndentToolTip: jqxTooltipComponent;
    @ViewChild('SortToolTip') sortToolTip: jqxTooltipComponent;
    @ViewChild('lineSpacingToolTip') lineSpacingToolTip: jqxTooltipComponent;
    @ViewChild('showHideToolTip') showHideToolTip: jqxTooltipComponent;
    @ViewChild('bucketColorToolTip') bucketColorToolTip: jqxTooltipComponent;

    // ColorPickers
    @ViewChild('bucketColorPicker') bucketColorPicker: jqxColorPickerComponent;
    @ViewChild('fontColorPicker') fontColorPicker: jqxColorPickerComponent;
    @ViewChild('highlightColorPicker') highlightColorPicker: jqxColorPickerComponent;

    // DropDownLists
    @ViewChild('font') fontDropDownList: jqxDropDownListComponent;
    @ViewChild('fontSize') fontSizeDropDownList: jqxDropDownListComponent;
    @ViewChild('changeCase') changeCaseDropDownList: jqxDropDownListComponent;
    @ViewChild('pasteDropDown') pasteDropDownList: jqxDropDownListComponent;

    // Grid
    @ViewChild('gridReference') jqxGrid: jqxGridComponent;

    ngAfterViewInit(): void 
    {
        this.createButtons();
        this.buttonsStyling();

        this.ribbon.createWidget(this.ribbonSettings);
        this.ribbon.disableAt(0);
        this.jqxGrid.createWidget(this.gridData());
    }

    createButtons(): void
    {
        this.fileItemButton.createWidget(this.fileItemButtonSettings);
        this.fileItemButton.setContent('<span style="position: relative; line-height: 26px; margin-left:10px;">File</span>')
        this.saveButton.createWidget({ theme: "demoTheme" });
        this.saveAsButton.createWidget({ theme: "demoTheme" })
        this.openButton.createWidget({ theme: "demoTheme" })
        this.closeButton.createWidget({ theme: "demoTheme" })
        this.copyButton.createWidget({ theme: "demoTheme" });
        this.cutButton.createWidget({ theme: "demoTheme" });
        this.formatPainterButton.createWidget({ theme: "demoTheme" });
        this.shrinkFontButton.createWidget({ theme: "demoTheme" });
        this.growFontButton.createWidget({ theme: "demoTheme" });
        this.clearFormattingButton.createWidget({ theme: "demoTheme" });
        this.alignLeftButton.createWidget({ theme: "demoTheme" });
        this.alignCenterButton.createWidget({ theme: "demoTheme" });
        this.alignRightButton.createWidget({ theme: "demoTheme" });
        this.alignJustifyButton.createWidget({ theme: "demoTheme" });
        this.bulletListButton.createWidget({ theme: "demoTheme" });
        this.numberedListButton.createWidget({ theme: "demoTheme" });
        this.decreaseIndentButton.createWidget({ theme: "demoTheme" });
        this.increaseIndentButton.createWidget({ theme: "demoTheme" });
        this.sortButton.createWidget({ theme: "demoTheme" });
        this.lineSpacingButton.createWidget({ theme: "demoTheme" });
        this.showHideButton.createWidget({ theme: "demoTheme" });
    }

    buttonsStyling(): void
    {
        for (let i = 0; i < document.getElementsByTagName('angulartooltip').length; i++)
        {
            (<HTMLElement>document.getElementsByTagName('angulartooltip')[i].firstElementChild).style.display = 'inline-block';
        }
        for (let i = 0; i < document.getElementsByTagName('angularbutton').length; i++)
        {
            (<HTMLElement>document.getElementsByTagName('angularbutton')[i].firstElementChild).style.display = 'inline-block';
            (<HTMLElement>document.getElementsByTagName('angularbutton')[i].firstElementChild).setAttribute('checked', 'false');
        }
        for (let i = 0; i < document.getElementsByTagName('angulardropdownlist').length; i++)
        {
            (<HTMLElement>document.getElementsByTagName('angulardropdownlist')[i].firstElementChild).style.display = 'inline-block';
        }

        (<HTMLElement>document.getElementById('fileItemButton').firstElementChild).style.color = 'white';
        (<HTMLElement>document.getElementById('fileItemButton').firstElementChild).style.background = 'transparent';
    }

    onBucketColorPicker(event: any): void 
    {
        (<HTMLElement>document.getElementById('bucketColorPreview')).style.background = '#' + event.args.color.hex;
    }

    onSubScriptClick(event: any): void
    {
        this.superScriptToggleButton.toggled(false);
    }

    onSuperScriptClick(event: any): void
    {
        this.subscriptToggleButton.toggled(false);
    }

    onFontColorPicker(event: any): void 
    {
        (<HTMLElement>document.getElementById('fontColorPreview')).style.background = '#' + event.args.color.hex;
    }

    onHighlightColorPicker(event: any): void 
    {
        (<HTMLElement>document.getElementById('highlightColorPreview')).style.background = '#' + event.args.color.hex;
    }

    onPasteButtonClick(event: any): void
    {
        let text = (<HTMLElement>document.getElementsByClassName('pasteText')[0]).innerHTML;
        console.log(text + ' clicked');
    }

    onMouseDownPasteButton(event: any): void 
    {
        event.preventDefault();
    }

    onPasteDropDownSelect(event: any): void
    {
        let pasteData =
            [
                { label: 'Paste', imageClass: 'icon page_paste' },
                { label: 'Paste Special', imageClass: 'icon paste_plain' },
                { label: 'Paste text', imageClass: 'icon paste_word' },
                { label: 'Paste link', imageClass: 'icon PasteImage' }
            ];
        let index = event.args.index;
        let icon = '<span class="' + pasteData[index].imageClass + '" style="zoom: 1.5"></span>';
        (<HTMLElement>document.getElementById('pasteButton').firstElementChild).innerHTML = (icon + '<span class="pasteText">' + pasteData[index].label + '</span>');
        this.pasteButton.render();
    }

    fileItemButtonSettings: jqwidgets.DropDownButtonOptions =
    {
        arrowSize: 0,
        height: 26,
        dropDownWidth: 120,
        width: 50,
        theme: 'demoTheme'
    }

    ribbonSettings: jqwidgets.RibbonOptions =
    {
        width: 802,
        height: 131,
        animationType: "none",
        selectionMode: "click",
        position: "top",
        mode: "default",
        theme: "demoTheme",
        selectedIndex: 1,
        initContent: (item: number): void =>
        {
            switch (item)
            {
                case 0:
                    break;
                case 1:
                    // Creating Toggle Buttons
                    let subscript = this.subscriptToggleButton.createWidget({ theme: "demoTheme" });
                    let superscript = this.superScriptToggleButton.createWidget({ theme: "demoTheme" });
                    let bold = this.boldToggleButton.createWidget({ theme: "demoTheme" });
                    let italic = this.italicToggleButton.createWidget({ theme: "demoTheme" });
                    let underline = this.underlineToggleButton.createWidget({ theme: "demoTheme" });
                    let strikethrough = this.striketroughToggleButton.createWidget({ theme: "demoTheme" });

                    // Creating Tooltips 
                    let toolTipSettings: jqwidgets.ToolTipOptions =
                    {
                        position: "mouse",
                        content: "Cut (Ctrl + X)",
                        theme: "demoTheme"
                    }

                    this.cutButtonToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Copy (Ctrl + C)';
                    this.copyButtonToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Subscript';
                    this.subscriptToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Superscript';
                    this.superscriptToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Bold (Ctrl + B)';
                    this.boldToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Italic (Ctrl + I)';
                    this.italicToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Underline (Ctrl + U)';
                    this.underlineToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Strikethrough';
                    this.strikethroughToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Align Text Left (Ctrl + L)';
                    this.alignLeftToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Center (Ctrl + E)';
                    this.alignCenterToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Align Text Right (Ctrl + R)';
                    this.alignRightToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Justify (Ctrl + J)';
                    this.alignJustifyToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Bulleted List';
                    this.bulletListToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Numbered List';
                    this.numberedListToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Sort Direction';
                    this.sortToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Decrease Indent';
                    this.decreaseIndentToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Increase Indent';
                    this.increaseIndentToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Line and Paragraph Spacing';
                    this.lineSpacingToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Show/Hide special characters';
                    this.showHideToolTip.createWidget(toolTipSettings);
                    toolTipSettings['content'] = 'Fill style';
                    toolTipSettings['theme'] = 'demoTheme';
                    this.bucketColorToolTip.createWidget(toolTipSettings);

                    let bucketColorButtonSettings: jqwidgets.DropDownButtonOptions =
                        {
                            width: 42,
                            height: 19,
                            dropDownWidth: 180,
                            theme: "demoTheme",
                            initContent: (): void =>
                            {
                                let buckerColorPickerSettings =
                                    {
                                        color: "000000",
                                        theme: 'demoTheme',
                                        colorMode: 'hue',
                                        width: 180,
                                        height: 180
                                    }
                                this.bucketColorPicker.createWidget(buckerColorPickerSettings);
                            }
                        }

                    this.bucketColorButton.createWidget(bucketColorButtonSettings);
                    this.bucketColorButton.setContent('<span style="position:relative; display:inline"><div class="icon paintcan"></div><span id="bucketColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span><span style="position:relative; display: inline; top:3px"></span>');

                    let fontListSettings: jqwidgets.DropDownListOptions =
                        {
                            source:
                            [
                                "<span style='font-family: Courier New;'>Courier New</span>",
                                "<span style='font-family: Times New Roman;'>Times New Roman</span>",
                                "<span style='font-family: Arial;'>Arial</span>"
                            ],
                            width: 120,
                            height: 21,
                            autoDropDownHeight: true,
                            theme: "demoTheme",
                            selectedIndex: 1
                        }
                    this.fontDropDownList.createWidget(fontListSettings);

                    let fontSizeSettings: jqwidgets.DropDownListOptions =
                        {
                            source: [8, 9, 10, 11, 12, 14, 18, 20, 22, 24],
                            renderer: (index, label, value) =>
                            {
                                return '<span style="font-size:' + value + 'px;">' + value + '</span>';
                            },
                            width: 70,
                            height: 21,
                            theme: "demoTheme",
                            autoDropDownHeight: true,
                            selectedIndex: 2
                        }
                    this.fontSizeDropDownList.createWidget(fontSizeSettings);

                    let changeCaseSettings: jqwidgets.DropDownListOptions =
                        {
                            source: ['Sentence Case', 'lowercase', 'UPPERCASE', 'Capitalize Each Word'],
                            selectionRenderer: (object, index, label) =>
                            {
                                return '<div class="icon change-case-16" style="top:3px;  position:relative"></div>';
                            },
                            dropDownWidth: 150,
                            autoDropDownHeight: true,
                            theme: "demoTheme",
                            selectedIndex: 0,
                            width: 40
                        }
                    this.changeCaseDropDownList.createWidget(changeCaseSettings);

                    let fontColorButtonSettings: jqwidgets.DropDownButtonOptions =
                        {
                            width: 100,
                            height: 21,
                            dropDownWidth: 180,
                            theme: "demoTheme",
                            initContent: () =>
                            {
                                let fontColorPickerSettings =
                                    {
                                        color: "000000",
                                        theme: 'demoTheme',
                                        colorMode: 'hue',
                                        width: 180,
                                        height: 180
                                    }
                                this.fontColorPicker.createWidget(fontColorPickerSettings);
                            }
                        }
                    this.fontColorButton.createWidget(fontColorButtonSettings);
                    this.fontColorButton.setContent('<span style="position:relative; display:inline; top: 2px"><div class="icon FontDialogImage"></div><span id="fontColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#000"></span></span><span style="position:relative; display: inline; top:3px">Font Color</span>');

                    let highlightColorSettings: jqwidgets.DropDownButtonOptions =
                        {
                            width: 130,
                            height: 21,
                            dropDownWidth: 180,
                            theme: "demoTheme",
                            initContent: () =>
                            {
                                let highlightColorPickerSettings =
                                    {
                                        color: "FF0000",
                                        colorMode: 'hue',
                                        theme: 'demoTheme',
                                        width: 180,
                                        height: 180
                                    }
                                this.highlightColorPicker.createWidget(highlightColorPickerSettings);
                            }
                        }
                    this.highlightColorButton.createWidget(highlightColorSettings);
                    this.highlightColorButton.setContent('<span style="position:relative; display:inline; top: 2px"><div class="icon pencil"></div><span id="highlightColorPreview" style="display: block; position:absolute;  height: 3px; width: 16px; background:#F00"></span></span><span style="position:relative; display: inline; top:3px">Highlight Color</span>');

                    let pasteData =
                        [
                            { label: 'Paste', imageClass: 'icon page_paste' },
                            { label: 'Paste Special', imageClass: 'icon paste_plain' },
                            { label: 'Paste text', imageClass: 'icon paste_word' },
                            { label: 'Paste link', imageClass: 'icon PasteImage' }
                        ];

                    this.pasteButton.createWidget({ width: 35, height: 56, theme: "demoTheme" });

                    let pasteDropDownListSettings: jqwidgets.DropDownListOptions =
                        {
                            source: pasteData,
                            width: 22,
                            height: 10,
                            animationType: 'none',
                            dropDownWidth: '110px',
                            theme: "demoTheme",
                            autoDropDownHeight: true,
                            renderer: (index: number, label, value) =>
                            {
                                let labelEl = '<span style="font-size: 10px">' + label + '</span>';
                                let icon = '<span class="' + pasteData[index].imageClass + '" style=""></span>';
                                return '<span>' + icon + labelEl + '</span>';
                            },
                            selectionRenderer: (object, index, label) =>
                            {
                                return "";
                            },
                            selectedIndex: 0
                        }
                    this.pasteDropDownList.createWidget(pasteDropDownListSettings);
                    break;
                case 2:
                    this.helpButton.createWidget({ width: 26, height: 26, theme: "demoTheme" });
                    this.aboutButton.createWidget({ width: 26, height: 26, theme: "demoTheme" });
                    this.updateButton.createWidget({ width: 26, height: 26, theme: "demoTheme" });
                    break;
            }
        }
    };

    gridData(): any
    {
        let numberrenderer = (row, column, value): string =>
        {
            return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
        };

        let datafields = [];
        let columns = [];

        for (let i = 0; i < 26; i++)
        {
            let text = String.fromCharCode(65 + i);
            if (i == 0)
            {
                let cssclass = 'jqx-widget-header';
                columns[columns.length] =
                    {
                        pinned: true,
                        exportable: false,
                        text: "",
                        columntype: 'number',
                        cellclassname: cssclass,
                        cellsrenderer: numberrenderer
                    };
            }
            datafields[datafields.length] = { name: text };
            columns[columns.length] = { text: text, datafield: text, width: 60, align: 'center' };
        }

        let source =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: datafields,
        };
        let dataAdapter = new $.jqx.dataAdapter(source);
        let jqxGridSettings: jqwidgets.GridOptions =
        {
            width: 800,
            source: dataAdapter,
            theme: "demoTheme",
            editable: true,
            columnsresize: true,
            selectionmode: 'multiplecellsadvanced',
            columns: columns
        }

        return jqxGridSettings;
    }
}
