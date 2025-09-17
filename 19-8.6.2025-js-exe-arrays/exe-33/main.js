function exe33(){
    for(let i=1;i<=4585;i++){
        if(i.toString().includes("3")){
            console.log(i)
        }
    }
}
function exe33v2(){
    for(let i=1;i<=50;i++){
        if(i%10==3 || Math.floor(i/10) ==3){
            console.log(i)
        }
    }
}

exe33()