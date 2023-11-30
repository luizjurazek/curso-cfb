function bubbleSort(array) {
    var len = array.length;
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Trocar elementos se estiverem na ordem errada
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

// Exemplo de uso:
var meuArray = [5, 3, 9, 1, 7, 6, 8, 2, 4, 15, 11, 13, 12, 10, 14];
console.log("Array original:", meuArray);

bubbleSort(meuArray);

console.log("Array ordenado:", meuArray);