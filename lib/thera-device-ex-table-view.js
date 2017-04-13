'use babel';
'use strict'

export default class DeviceExTableView {
    constructor(table, qrImg) {
        this.table = table;
        this.qrImg = qrImg;
        return this.create();
    }

    create() {
        var tbl = document.createElement('table');
        tbl.rules = 'cols'
        tbl.frame = 'box'
        tbl.className = 'thera_devide_panel_table'
        var tbdy = document.createElement('tbody');

        var tr = document.createElement('tr');

        var td = document.createElement('td');
        td.appendChild(this.table)
        tr.appendChild(td)

        var td = document.createElement('td');
        td.appendChild(this.qrImg)
        tr.appendChild(td)

        tbdy.appendChild(tr);
        return tbdy;
    }
}