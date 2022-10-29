function targetInfo(e){
    var elResponse = document.getElementById('response');
    elResponse.innerHTML= "Tipo evento " + e.type;
    elResponse.innerHTML+="<br>Nel TAG: "+e.target.tagName;
}
var elUsername=document.getElementById('username');
elUsername.addEventListener('focus',targetInfo);