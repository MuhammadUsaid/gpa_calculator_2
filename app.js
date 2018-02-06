//Changing Semester Box
function displayOther(id){
    target = document.getElementById(id+"_form")
    semesters = []
    for(i=1;i<12;i++){
        semesters.push(document.getElementById('sem{i}_form'))
        id==target? hideAndSeek(semesters[i],True): hideAndSeek(semesters[i],False)
    }
    // sem1 = document.getElementById('sem1_form')
    // sem2 = document.getElementById('sem2_form')
    // sem3 = document.getElementById('sem3_form')
    // sem4 = document.getElementById('sem4_form')
    // sem5 = document.getElementById('sem5_form')
    // sem6 = document.getElementById('sem6_form')
    // sem7 = document.getElementById('sem7_form')
    // sem8 = document.getElementById('sem8_form')
    // sum1 = document.getElementById('sem8_form')
    // sum2 = document.getElementById('sem8_form')
    // sum3 = document.getElementById('sem8_form')
}
function hideAndSeek(id,hide){
    hide? id.style.display="none": id.style.display="inline"
}