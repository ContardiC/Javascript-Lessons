var YOBValue=document.getElementById('YOB').textContent;
function calculateAge(YOB){
    var currentDate=new Date();
    var currentYear=currentDate.getFullYear();
    var age=currentYear-YOBValue;
    return age;
}
document.getElementById('age').textContent=calculateAge();