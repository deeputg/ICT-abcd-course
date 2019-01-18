function formSubmit(){
    console.log("form submit");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var myclass = document.getElementById('myClass').value;
    document.getElementById('infobox').innerHTML=name;
}