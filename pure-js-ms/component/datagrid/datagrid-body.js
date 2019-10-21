let element = {
    text : ''
}

function fillGrid(datagrid, list_element){
    var column
    var cellText
    log(list_element)
    let element
    for(var j = 0; j < list_element.length; j++){
        var line = document.createElement('tr')   
        element = list_element[j]
        for (key in element) {
            column = document.createElement('td')
            if(data.hasOwnProperty(key)) {
                columnText = document.createTextNode(element[key])
            }
            column.appendChild(columnText);
            line.appendChild(column)
        }
        datagrid.appendChild(line);
    }
}

function clearGrid(datagrid){
    datagrid.remove();
}