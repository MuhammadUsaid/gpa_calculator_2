//Changing Semester Box
function displayOther(id){
    console.log(id)
    target = document.getElementById(id+"form")
    for(i=1;i<=11;i++){
        document.getElementById('semester'+String(i)+'form').style.display = "none"
    }
    target.style.display = "inline"
}
function add(id){
    main_div = document.getElementById(id).previousSibling.parentNode
    identity = document.getElementById(id).previousSibling.parentNode.id
    sem = identity.slice(0,3)
    row = identity.slice(3,identity.length-1)
    row = row + (parseInt(identity.slice(identity.length-1))+1).toString(10)
    div1 = document.createElement('div')
    div1.className = "form-row"
    div1.id = sem + row
    div2 = document.createElement('div')
    div2.className = "col-2"
    input = document.createElement('input')
    input.type = "text"
    input.className = "form-control"
    div2.appendChild(input)
    div1.appendChild(div2)
    console.log(div1)
    div3 = document.createElement('div')
    div3.className = "col-2"
    select = document.createElement('select')
    select.className = "custom-select mr-sm-4 grade"
    select.id = "inlineFormCustomSelect"
    grades = ['A','A-','B+','B',"B-",'C+','C','C-','F']
    for(i=0;i<grades.length;i++){
        option = document.createElement('option')
        option.innerHTML = grades[i]
        select.add(option)
    }
    div1.appendChild(select)
    select = document.createElement('select')
    credits = [1,2,3,4,5]
    for(i=0;i<credits.length;i++){
        option = document.createElement('option')
        option.innerHTML = credits[i]
        select.add(option)
    }
    div1.appendChild(select)
    main_div.appendChild(div1)
}
function addGpaToCgpa(){}