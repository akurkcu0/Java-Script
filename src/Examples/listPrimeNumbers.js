
function primeNumber(number)
{
    let flag = 0
        for(let j=2;j<number;j++)
        {
            if(number%j==0){
                flag++
            }
        }
        if(flag==0){
            console.log("Number " + number + " Prime Number.")
        }
    }


for (let i = 3; i < 1000; i++) {
    primeNumber(i)
}