function User(firstName,lastName,YOB){
    this.firstName = firstName;
    this.lastName = lastName;
    this.YOB = YOB;
    this.age = function(){
        var currentYear= new Date().getFullYear();
        return  currentYear - this.YOB;
    };
}
var user=new User("Mario","Rossi",2000);
var elUserData=document.getElementById("user-data");
elUserData.textContent="Nome: " + user.firstName + " Cognome: " + user.lastName + " Età: " + user.age();