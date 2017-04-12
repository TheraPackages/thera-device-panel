'use babel';
'use strict'

const $ = require('jquery')

export default class TheraDevicePanelView {

    constructor() {
        let dContainer = document.createElement('div')
        dContainer.onclick = function () {
            event.cancelBubble = true;
        }
        this.panel = atom.workspace.addModalPanel({
            item: $(dContainer).addClass('thera_device_panel_container'),
            visable: false
        })

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