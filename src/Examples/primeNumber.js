
function primeNumber(...numbers)
{
    for (let i=0;i<numbers.length;i++)
    {
        let number = numbers[i]
        let flag=0
        for(let j=2;j<number;j++)
        {
            if(number%j==0){
                flag++
            }
        }
        if(flag==0){
            console.log("Number " + number + " Prime Number.")
        }
        else{
            console.log("Number " + number + " Not A Prime Number.")
        }
    }
}
primeNumber(18,19,43)