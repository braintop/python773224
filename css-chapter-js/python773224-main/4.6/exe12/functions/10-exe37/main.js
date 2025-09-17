function isEven(){
    let num = document.getElementById("number").value
    if(num%2==0){
     //   alert("even")
        document.getElementById("answer").innerText = "even"
        document.getElementById("answer").style.color = "green"
    }
    else{
      // alert("odd")
        document.getElementById("answer").innerText = "odd"
        document.getElementById("answer").style.color = "red"
    }
}


