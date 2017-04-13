'use babel';
'use strict'

export default class DeviceExTableView {
    constructor(tableView, qrView) {
        this.tableView = tableView;
        this.qrView = qrView;
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
        td.appendChild(this.tableView)
        tr.appendChild(td)

        var td = document.createElement('td');
        td.appendChild(this.qrView)
        tr.appendChild(td)

        tbdy.appendChild(tr);
        return tbdy;
    }
}