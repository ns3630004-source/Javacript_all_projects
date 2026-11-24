// write a program of calculator challange.

while (true){

    
    let choice=Number(prompt("enter your choice value 0 for exit :  1 for addition : 2 for subtraction 3 for multiply: 4 for divide: 5 for power"))

   
     if (choice===0) {
         
        console.log("thanks for using sir this project :")

        break;
      }

      if (choice>=1 && choice<=5)
      {
      let num1=Number(prompt("enter your value :"))

      let num2=Number(prompt("enter your second value :"))

    switch (choice){
      
        


       case 1:

       console.log(num1+num2)

       break;


       case 2:

       console.log(num1-num2);

        break;


       case 3:

       console.log(num1*num2)

       break;

       case 4:

       console.log(num1/num2)

        break;


       case 5:

      console.log(num1**num2)

       break


       default:
        
       console.log("please choice a valid operator given below :")








    }
    
   }
 
  else{

    console.log("please choose a valid operator")
    break;
  }
}