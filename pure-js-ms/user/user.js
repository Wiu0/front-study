let data = user_model
let l_header_definition = [
    { text : 'First Name'},
    { text : 'Last Name'},
    { text : 'Born Date'}
]

function save(){    
    data.fisrt_name = document.getElementById("first_name").value;
    data.last_name = document.getElementById("last_name").value;
    data.date_born =  document.getElementById("born_date").value;
    mock_list_user_model.push(data);
    //clearGrid(document.getElementById("datagrid-user"))
    find()
    log(data);
}

function find(){
    fillGrid(document.getElementById("datagrid-user"), mock_list_user_model)
}

function initializer(){
    loadHeaderGrid()
}

function loadHeaderGrid(){
    fillHeader(document.getElementById("datagrid-user"), l_header_definition)
}

