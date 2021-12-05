
function perfectNumber(num1) {
    let sum1 = 0
    for (let i = 0; i <= num1; i++) {
        if(num1 % i == 0){
            sum1 += i
        }
    }
    if (sum1 == num1 * 2) {
        console.log(num1 +" are perfect number.")
    }
}

for (let i = 3; i < 1000; i++) {
    perfectNumber(i)
}