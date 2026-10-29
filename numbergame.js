

 
 let attempt=0;
 
while(true)

{

   
    let num=Math.floor(Math.random()*10)+1
    let num2=Number(prompt("enter your guessing number: "));
    attempt++;

    if (num2>num)
    {
        console.log("your choice number is: ",num2)
        console.log("computer choice number is: ",num);
        console.log("choose less  then number computer: ");
        
    }


    else if (num2<num){

      console.log("your choice number is: ",num2)

      console.log(" computer choice number is ",num)
    
    console.log("choose greater  number then computer:");
    }

    else
    {

        console.log("congatulation you won this game: ");
        break
    }



}

console.log("your total attempt is : ",attempt)