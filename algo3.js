/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

let fibonacci = (n) => { 
    return (n - 1) <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);}
