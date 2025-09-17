function exe30(){
    let username = prompt("enter your name")
    while(username != "admin" ){
         username = prompt("enter your name")
    }
    document.getElementById("btn").style.color="green"
    document.getElementById("btn").disabled = true;
}
//exe30()