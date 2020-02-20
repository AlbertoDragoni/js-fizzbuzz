//creazione numeri da 0 a 100 (con ciclo/array)
//stampare fizz ai multipli di 3
//stampare buzz ai multipli di 5
//unire
//
for (var i = 1; i <= 100; i++) {
    if (i % 5 ==0 && i % 3 ==0) {
        document.getElementById('numero').innerHTML='FizzBuzz';
        console.log('FizzBuzz');
    } else if (i % 3 ==0) {
        document.getElementById('numero').innerHTML='Fizz';
        console.log('Fizz');
    } else if (i % 5 ==0) {
        document.getElementById('numero').innerHTML='Buzz';
        console.log('Buzz');
    } else {
        document.getElementById('numero').innerHTML='i';
        console.log(i);
    }
}
