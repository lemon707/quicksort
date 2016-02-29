var swap = function(array, firstIndex, secondIndex) {

    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    
};

var partition = function(array, p, r) {

    var j, q;

    for(j = p, q = p; j < r; j += 1) {

        if(array[j] <= array[r]) {
            swap(array, j, q);
            q += 1;
        }

    }

    swap(array, r, q);

    return q;

};

var quickSort = function(array, p, r) {

    if(p < r) {
        var q = partition(array, p, r);
        quickSort(array, p, q-1);
        quickSort(array, q+1, r);
    }

};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
var array2 = [9,-1,2,0];

console.log('result of array', quickSort(array, 0, array.length-1));
console.log('result of array2', quickSort(array2,0,array2.length-1));