/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  let calcul;
  if(num <= 0){
      return 0;
  }
  if(num === 1){
      return 1;
  }
  let rabbitMale = 0;
  let rabbitFemale = 1;
  for(var i=2; i<= num+1; i++){
      calcul = rabbitFemale + rabbitMale
      rabbitMale = rabbitFemale
      rabbitFemale = calcul
  };
  return rabbitFemale
}

// Je n'arriverai pas à le refaire sans internet.