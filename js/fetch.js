const url = "https://jsonplaceholder.typicode.com/users";
const ul = document.querySelector('ul');

getUsers();

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderUsers(data);
    });
}

function renderUsers(users){
    console.log(users);
    users.forEach(user =>{
        console.log(user);
        ul.innerHTML += '<li>'+ user.id + ' ' + user.name + '</li>';
    });

}