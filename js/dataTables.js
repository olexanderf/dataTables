function DataTable(config, data) {
    let div = document.getElementById('usersTable');
    let table = document.createElement('table');
    let thead = document.createElement('thead');

    div.append(table);
    table.append(thead);


    createHead(config, thead);
    createTableBody(data, thead);
}
function createHead(config, thead) {

    if (config.columns) {
        let tr = document.createElement('tr');
        let th = document.createElement('th');

        thead.append(tr);
        th.innerText = '№'
        tr.append(th);

        config.columns.forEach(el => {
            let elementOfThead = document.createElement('th');
            elementOfThead.innerText = el.title;
            tr.append(elementOfThead);
        });
    }
}
function createTableBody(data, thead) {
    let tbody = document.createElement('tbody');

    thead.after(tbody);
    if (data) {
        data.forEach((el, index) => {
            let tr = document.createElement('tr');
            tbody.append(tr);
            for (let value in el) {
                if (value === 'id') {
                    let elementOfTbody = document.createElement('td');
                    elementOfTbody.innerText = index + 1;
                    tr.append(elementOfTbody);
                } else {
                    let elementOfTbody = document.createElement('td');
                    elementOfTbody.innerText = el[value];
                    tr.append(elementOfTbody);
                }
            }
        });
    }
}

const config1 = {
    parent: '#usersTable',
    columns: [
        { title: 'Имя', value: 'name' },
        { title: 'Фамилия', value: 'surname' },
        { title: 'Возраст', value: 'age' },
    ]
};

const users = [
    { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
    { id: 30051, name: 'Вася', surname: 'Васечкин', age: 15 },
    { id: 30051, name: 'Петя', surname: 'Васечкин', age: 13 },
    { id: 30051, name: 'Вадим', surname: 'Васечкин', age: 10 },
];


DataTable(config1, users);

//define some sample data
var tabledata = [
    {id:1, name:"Вася", surname: 'Петров', age:"12"},
    {id:2, name:"Вася", surname: 'Васечкин', age:"15"},
    {id:3, name:"Петя", surname: 'Васечкин', age:"13"},
    {id:3, name:"Вадим", surname: 'Васечкин', age:"10"},
];

//create Tabulator on DOM element with id "example-table"
var table = new Tabulator("#example-table", {
    height:120, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data:tabledata, //assign data to table
    layout:"fitColumns", //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        {title:"Имя", field:"name", width:150},
        {title:"Фамилия", field:"surname",},
        {title:"Возраст", field:"age"},
    ],
});

table.on("tableBuilt", () => {
    table.setPage(1);
  });