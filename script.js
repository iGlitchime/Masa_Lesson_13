/**
 * Created by IATS on 17.12.2017.
 */
var openForm = function(){
    var element = document.getElementById("form");
    element.classList.toggle("opened");
};

document.getElementById('button').addEventListener('click', function(e){

    e.preventDefault();

    var nameinfo = document.getElementById("name");
    var emailinfo = document.getElementById("email");

    if(!nameinfo.value){
        nameinfo.style.border = '1px solid red';
        nameinfo.placeholder = 'add name!';
    }
    if(!emailinfo.value){
        emailinfo.style.border = '1px solid red';
        emailinfo.placeholder = 'add email!';
    }

});