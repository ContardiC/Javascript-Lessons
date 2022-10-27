var user = {
    firstName : 'Mario',
    lastName : 'Rossi',
    YOB : 2000,
    age : function(){
        var currentYear= new Date().getFullYear();
        return  currentYear - this.YOB;
    }
} 
var elUserData=document.getElementById("user-data");
elUserData.textContent="Nome: " + user.firstName + " Cognome: " + user.lastName + " Età: " + user.age();