'use babel';
'use strict'

const $ = require('jquery')

import DeviceTableMaker from './thera-device-table-view';

export default class DevicePanelView {

    constructor() {
        let dContainer = document.createElement('div')
        dContainer.onclick = function () {
            event.cancelBubble = true;
        }
        this.panel = atom.workspace.addModalPanel({
            item: $(dContainer).addClass('thera_device_panel_container'),
            visable: false
        })

        var employees = [
            { "firstName":"Bill" , "lastName":"Gates","age":"23" , "job":"drawer"   },
            { "firstName":"George" , "lastName":"Bush","age":"27" , "job":"singer" },
            { "firstName":"Thomas" , "lastName": "Carter","age":"23" , "job":"programmer" },
            { "firstName":"Thomas" , "lastName": "Carter","age":"23" , "job":"programmer" },
            { "firstName":"Thomas" , "lastName": "Carter","age":"23" , "job":"programmer" }
        ];

        var keys = ["firstName","lastName",'age','job']

        var tableMaker = new DeviceTableMaker('hello all','',keys,employees);

        dContainer.appendChild(tableMaker.createTable());
    }



    show() {
        this.previousWindowClickEvent = window.onclick
        window.onclick = this.dismiss.bind(this)
        this.panel.show()
    }

    dismiss() {
        this.panel.hide()
        window.onclick = this.previousWindowClickEvent
    }
}