function checkUsername(){
    var elResponse = document.getElementById('response');
    var username = this.value;
    if(username.charAt(0)=='#'){
        
    }
}
var elUsername= document.getElementById('username');
elUsername.onblur=checkUsername;