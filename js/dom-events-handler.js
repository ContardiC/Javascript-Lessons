function checkUsername(){
    var elResponse = document.getElementById('response');
    var username = this.value;
    if(username.charAt(0)=='#'){
        elResponse.textContent='Il nome utente non può iniziare con #';
    }else{
        elResponse.textContent='';
    }
}
var elUsername= document.getElementById('username');
elUsername.onblur=checkUsername;