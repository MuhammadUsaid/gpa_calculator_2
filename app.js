//Changing Semester Box
function displayOther(id){
    console.log(id)
    target = document.getElementById(id+"form")
    for(i=1;i<=11;i++){
        document.getElementById('semester'+String(i)+'form').style.display = "none"
    }
    target.style.display = "inline"
}

function addGpaToCgpa(){}