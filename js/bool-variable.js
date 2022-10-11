var message;
var value;
var notValue;
message="La luce è: ";
var elMessage=document.getElementById("message");
elMessage.textContent=message;
value=true;
var elValue=document.getElementById("value");
var elAnotherMessage=document.getElementById("another-message");
var elNotValue=document.getElementById("not-value");
if(value){
    elValue.textContent="ACCESA";
}else{
    elValue.textContent="SPENTA";
}
notValue=!value;
elAnotherMessage.textContent="quindi non è:"
if(notValue){
    elNotValue.textContent="ACCESA";
}else{
    elNotValue.textContent="SPENTA";
}