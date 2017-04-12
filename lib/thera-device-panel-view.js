'use babel';
'use strict'

const $ = require('jquery')
const path = require('path')

export default class TheraDevicePanelView {

    constructor() {
        this.qrcodePath = path.join(atom.configDirPath, 'storage', 'qr.png')

        let dContainer = document.createElement('div')

        this.panel = atom.workspace.addModalPanel({
            item: $(dContainer).addClass('thera_device_panel_container'),
            visable: false
        })


        dContainer.onclick = function () {
            event.cancelBubble = true;
        }
    }


    displayQRCode() {
        $(this.qrImage).attr('src', this.qrcodePath).show()
        $(this.loadingInspector).hide()
    }

    show() {
        this.previousWindowClickEvent = window.onclick
        window.onclick = this.dismiss.bind(this)
        this.panel.show()
    }

    dismiss() {
        this.panel.hide()
        $(this.loadingInspector).show()
        $(this.qrImage).hide()
        window.onclick = this.previousWindowClickEvent
    }
}