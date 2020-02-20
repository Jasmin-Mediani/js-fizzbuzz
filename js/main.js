
for (var i = 1; i <= 100; i++) {
    if ((i % 3) == 0 && (i % 5) == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
        //va messo qui in fondo, non in cima... altrimenti stampa il numero di ogni ciclo, arrivando da 1 a 100, ma non sostituisce Fizz e Buzz dove dovrebbe: lo aggiunge sotto al numero che dovrebbe assumere quel valore. Mettendolo alla fine, invece, sostituisce la parola al numero senza fare doppioni perché ha ricevuto il comando da sopra. 
    }

}

