function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var location = "";
    for(var i = 0; i < objUsers.length; i++){
        if(username == objUsers[i].username
            && password == objUsers[i].password){
                window.open ("podstrona1 (1).html", false);
                alert( username + " zalogowany");
                return;
            }
    }
    alert("Nieprawidlowy login lub haslo!");
}
var objUsers = [
    {
        username: "Albert", 
        password: "asda"
    },
    {
        username: "Krzysztof",
        password: "kti"
    },
    {
        username: "Adam",
        password: "oki"
    }

]