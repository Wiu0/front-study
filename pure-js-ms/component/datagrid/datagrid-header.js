let header_definition = {
    text : ''
}

function fillHeader(datagrid, header_definition){
    var line = document.createElement("tr")
    var column
    var cellText
    log(header_definition)
    for(var i = 0; i < header_definition.length; i++){
        column = document.createElement('td')

        columnText = document.createTextNode(header_definition[i].text)
        column.appendChild(columnText);
        line.appendChild(column)
    }
    datagrid.appendChild(line);
}
