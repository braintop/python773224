function inputSalary(){
    let salaries = []
    for(let i=0;i<6;i++){
        let salary = +prompt("enter salary")
        salaries.push(salary)
    }//end of for 
    let sum = 0 
    let max = salaries[0]
    let min = salaries[0]
    for(let i=0;i<salaries.length;i++){
        sum+= salaries[i]

        if(salaries[i] > max){
            max = salaries[i]
        }
        if(salaries[i] < min){
            min = salaries[i]
        }

    }// end of for 
    let avearge = sum/salaries.length
    alert("average is :" + avearge  + "min is : " + min +  " and max is : " + max )
}

inputSalary()