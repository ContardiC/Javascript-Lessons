var elUsername= document.getElementById('username');
elUsername.addEventListener('blur',function(){
    checkUsername('#');
    console.log('Evento blur');
},false);
function checkUsername(symbol){
    var elResponse = document.getElementById('response');
    if(elUsername.value.charAt(0)==symbol){
        elResponse.textContent='Il nome utente non può iniziare con #';
    }else{
        elResponse.textContent='';
    }
}