function isCapitalName(){
    let name = document.getElementById("fname").value
    document.getElementById("firstname").innerText = name
    if(name.length == 0 ){
        alert("please fill your name")
        return
    }
    if(name[0]=='a' || name[0]=='A' ){
        document.getElementById("firstname").style.color="green"
    }
    else{
        document.getElementById("firstname").style.color="red"
    }

    document.getElementById("fname").value = ""
    document.getElementById("fname").style.background="red"
}


