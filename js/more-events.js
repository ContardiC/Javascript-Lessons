function addFocus(){
    var txtUsername = document.getElementById('username');
    txtUsername.focus();
}
function checkUsername(){
    var username=elUsername.value;
    if(username.length<6){
        elFeedback.classList.add('text-bg-danger');
        elFeedback.textContent='Devi inserire almeno 6 caratteri';
    }else{
        elFeedback.textContent='';
    }
}
function ToastTip(){
    const toastLiveExample = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
}
function resetTextArea(){
    elComment.value='';
}
var elUsername = document.getElementById('username');
var elFeedback = document.getElementById('feedback'); 
var elBtnReset = document.getElementById('btn-reset');
var elComment = document.getElementById('comment');
window.addEventListener('load',addFocus,false);
elUsername.addEventListener('blur',checkUsername,false);
elBtnReset.addEventListener('mouseover',ToastTip,false);
elBtnReset.addEventListener('click',resetTextArea,false);