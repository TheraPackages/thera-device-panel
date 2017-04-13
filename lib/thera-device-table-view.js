'use babel';
'use strict'

export default class DeviceTableMaker {
    constructor(prompt, promptIcon, keyArray, jsonArray) {
        this.prompt = prompt;
        this.promptIcon = promptIcon;
        this.keyArray = keyArray;
        this.jsonArray = jsonArray;
        return this.createTable();
    }

    createTable() {
        var rowNum = this.jsonArray.length;
        var columnNum = this.keyArray.length;

        // 设置 表格style
        var tbl = document.createElement('table');
        tbl.rules = 'cols'
        tbl.frame = 'box'
        tbl.className = 'thera_devide_panel_table'
        var tbdy = document.createElement('tbody');

        // 增加title
        var caption = document.createElement("caption");
        caption.innerHTML = "Table caption";
        caption.style.textAlign = 'left'
        tbl.appendChild(caption);

        //设置第一行：描述栏
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.style.borderBottom = '1px solid black'
        td.innerHTML = this.prompt
        td.style.textAlign = 'center'
        td.colSpan = columnNum + 1;
        tr.appendChild(td)
        tbdy.appendChild(tr);

        //设置第2行：属性栏
        var tr = document.createElement('tr');
        tr.style.background = 'green'
        for (var j = 0; j < columnNum; j++) {
            var td = document.createElement('td');
            td.innerHTML = this.keyArray[j]
            tr.appendChild(td)
        }

        //加上action列属性
        var td = document.createElement('td');
        td.innerHTML = 'action'
        tr.appendChild(td)

        tbdy.appendChild(tr);


        //填充表格内容
        for (var i = 0; i < rowNum; i++) {
            var tr = document.createElement('tr');
            var json = this.jsonArray[i];

            for (var j = 0; j < columnNum; j++) {
                var value = json[this.keyArray[j]]
                var td = document.createElement('td');
                td.innerHTML = value;
                tr.appendChild(td)
            }
            //加上action列属性的值
            var td = document.createElement('td');
            td.innerHTML = 'action' + Math.random();
            td.onclick = function () {
                alert(this.innerHTML)
            }
            tr.appendChild(td)


            //设置隔行变色
            if (i % 2 == 1) {
                tr.style.background = '#ccc'
            }

            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        return tbl;
    }

}