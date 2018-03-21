//Changing Semester Box
function displayOther(id){
    target = document.getElementById(id+"form")
    for(i=1;i<=11;i++){
        document.getElementById('semester'+String(i)+'form').style.display = "none"
    }
    target.style.display = "inline"
}
// Add More Courses
function addRow(id){
    button = document.getElementById(id)
    main_div = button.previousSibling.parentNode
    previous = button.previousSibling
    while(previous.nodeType != 1){
        previous = previous.previousSibling
    }
    identity = previous.id
    sem = identity.slice(0,3)
    row = identity.slice(3,identity.length-1)
    number = row[0]
    if(row.slice(0,2)=="10" || row.slice(0,2)=="11"){
    number = row.slice(0,2)
    }
    row = row + (parseInt(identity.slice(identity.length-1))+1).toString(10)
    div1 = document.createElement('div')
    div1.className = "form-row"
    div1.id = sem + row
    div2 = document.createElement('div')
    div2.className = "col-2"
    input = document.createElement('input')
    input.type = "text"
    input.className = "form-control"
    input.placeholder = "COURSE"
    div2.appendChild(input)
    div1.appendChild(div2)
    select = document.createElement('select')
    select.className = "custom-select mr-sm-4 grade"+number
    select.id = "inlineFormCustomSelect"
    grades = ['Grades','A','A-','B+','B',"B-",'C+','C','C-','F']
    for(i=0;i<grades.length;i++){
        option = document.createElement('option')
        option.innerHTML = grades[i]
        select.add(option)
    }
    div2 = document.createElement('div')
    div2.className = "col-2"
    div2.appendChild(select)
    div1.appendChild(div2)
    select = document.createElement('select')
    select.className = "custom-select mr-sm-4 credit"+number
    select.id = "inlineFormCustomSelect"
    credits = ['Credits',1,2,3,4,5]
    for(i=0;i<credits.length;i++){
        option = document.createElement('option')
        option.innerHTML = credits[i]
        select.add(option)
    }
    div2 = document.createElement('div')
    div2.className = "col-2"
    div2.appendChild(select)
    text = document.createTextNode('')
    div2.appendChild(text)
    div1.appendChild(div2)
    div1.appendChild(text)
    main_div.insertBefore(div1,button)
}
// Remove Rows
function removeRow(id){
    div = document.getElementById(id).previousElementSibling
    parent = div.parentNode
    id = div.id
    if(id[id.length-1] > 3){
        parent.removeChild(div)
    }
}
function sum(list){
    total = 0
    for(i=0;i<list.length;i++){
        if(list[i]!="Credits"&&list[i]!="Credit"){
            total += parseInt(list[i])
        }
    }
    return total
}
// Calculate GPA
function calculateGpa(n){
    grades = document.getElementsByClassName('grade'+n)
    grades = [].slice.call(grades).map((v) => v.value)
    credits = document.getElementsByClassName('credit'+n)
    credits = [].slice.call(credits).map((v) => v.value)
    totalCredits = sum(credits)
    gradePoints = 0
    gpa = {"A":4,"A-":3.67,"B+":3.33,"B":3,"B-":2.67,"C+":2.33,
    "C":2,"C-":1.67,"F":0,"Grade":0}
    for(i=0;i<grades.length;i++){
        if(credits[i] != 'Credits' && credits[i] != 'Credit'){
            gradePoints += gpa[grades[i]]*credits[i]
        }
    }
    Gpa = (gradePoints/totalCredits).toFixed(2)
    document.getElementById('gpa'+n).innerHTML = Gpa
}
function addGpaToCgpa(n){
    table = document.getElementById('table')
    form = document.getElementById('semester'+n+"form")
    children = form.childNodes
    nodes = []
    gpa = {"A":4,"A-":3.67,"B+":3.33,"B":3,"B-":2.67,"C+":2.33,
    "C":2,"C-":1.67,"F":0}
    for(i=0;i<children.length;i++){
        if(children[i].className=="form-row"){
            nodes.push(children[i])
        }
    }
    data = []
    for(i=0;i<nodes.length;i++){
        rows = nodes[i].childNodes
        value = []
        for(j=0;j<rows.length;j++){
            if(rows[j].className=="col-2"){
                temp = rows[j].firstElementChild.value
                value.push(rows[j].firstElementChild.value)
                if(temp == "Credit" || temp== "Credtis" || temp == "Grade" || temp == "Grades"){
                    alert("Please choose Grades and Credits")
                    return
                }
            }
        }
        if(value.length>0){
            value.push((value[2]*gpa[value[1]]).toFixed(2))
            data.push(value)
        }
    }
    for(i=0;i<data.length;i++){
        tr = document.createElement('tr')
        for(j=0;j<data[i].length;j++){
            text = data[i][j]
            td = document.createElement('td')
            td.innerHTML = text
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    rows = table.childNodes
    credits = 0
    gradePoints = 0
    for(i=0;i<rows.length;i++){
        if(rows[i].nodeType != 3){
            row = rows[i].childNodes
            credits += parseFloat(row[2].innerHTML)
            gradePoints += parseFloat(row[3].innerHTML)
        }
    }
    cgpa = document.getElementById('cgpa')
    cgpa.innerHTML = (gradePoints/credits).toFixed(2)
}