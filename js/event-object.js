function targetInfo(e){
    var elResponse = document.getElementById('response');
    elResponse.textContent= e.srcElement;
}
var elUsername=document.getElementById('username');
elUsername.addEventListener('focus',targetInfo);