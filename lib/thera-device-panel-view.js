'use babel';
'use strict'

const $ = require('jquery')

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

        var table = this.tableCreateByJson('hello all','',keys,employees);

        dContainer.appendChild(table);
    }

    tableCreateByJson(prompt,icon,keyArray,jsonArray) {
        var rowNum = jsonArray.length ;
        var columnNum = keyArray.length;

        // 设置 表格style
        var body = document.getElementsByTagName('body')[0];
        var tbl = document.createElement('table');
        tbl.rules = 'cols'
        tbl.frame = 'box'
        tbl.className ='myTable'
        var tbdy = document.createElement('tbody');

        // 增加title
        var caption = document.createElement("caption");
        caption.innerHTML="Table caption";
        caption.style.textAlign = 'left'
        tbl.appendChild(caption);

        //设置第一行：描述栏
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.style.borderBottom = '1px solid black'
        td.innerHTML = prompt
        td.style.textAlign = 'center'
        td.colSpan = columnNum + 1;
        tr.appendChild(td)
        tbdy.appendChild(tr);

        //设置第2行：属性栏
        var tr = document.createElement('tr');
        tr.style.background = 'green'
        for (var j = 0; j < columnNum; j++) {
            var td = document.createElement('td');
            td.innerHTML = keyArray[j]
            tr.appendChild(td)
        }

        //加上action列属性
        var td = document.createElement('td');
        td.innerHTML = 'action'
        tr.appendChild(td)

        tbdy.appendChild(tr);


        //填充表格内容
        for (var i = 0; i < rowNum ; i++) {
            var tr = document.createElement('tr');
            var json = jsonArray[i];

            for (var j = 0; j < columnNum; j++) {
                var value = json[keyArray[j]]
                var td = document.createElement('td');
                td.innerHTML = value;
                tr.appendChild(td)
            }
            //加上action列属性的值
            var td = document.createElement('td');
            td.innerHTML = 'action'+Math.random();
            td.onclick = function () {
                alert(this.innerHTML)
            }
            tr.appendChild(td)


            //设置隔行变色
            if(i%2 == 1 ){
                tr.style.background = '#ccc'
            }

            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        return tbl;
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