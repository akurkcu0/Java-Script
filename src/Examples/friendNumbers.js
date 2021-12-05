function friendNumber(num1,num2) {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < num1; i++) {
        if(num1 % i == 0){
            sum1 += i
        }
    }
        for (let i = 0; i < num2; i++) {
            if(num2 % i == 0){
                sum2 += i
            }
        }
    
    if (sum1 == num2 && sum2 == num1) {
        console.log(num1 + " and " + num2 +" are friend number.")
    }
    else{
        console.log(num1 + " and " + num2 + " are not friend number.")
    }
}

friendNumber(220,285)