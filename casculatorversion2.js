let num1=Number(prompt("enter your first number: "))

let num2=Number(prompt("enter your second number: "))

let choice=prompt("choose opertor given below +,-,*,/,**,%")


switch (choice)
  {


  case "+":

   console.log(num1+num2)
    break

  case "-":
  
     console.log(num1-num2);
     break

  case "*":
    
    console.log(num1*num2);
    break

  case "/":
    
    if (num2==0)
    {
     console.log(" error cannot divided by 0 : ")
    }
    else{
    console.log(num1/num2);
    }
    break;

  case "**":

    console.log(num1**num2)
    break;

  case "%":

    console.log(num1%num2);
    break;


  default:

    console.log("choose right operator given below:")
}