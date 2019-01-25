/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
 let start = 0;
 let calcul = 1;
 let cuil = [0,1];
 
 for(let i = 2; i < num+2; i++){
     cuil[i] = cuil[start] + cuil[calcul];
     start++;
     calcul++;

   

 }
 return cuil[num];
}

fibonacci()
