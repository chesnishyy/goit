function pow() {
    var number = prompt('введите число');
    var power = prompt('введите степень');
    var result = 1;

    if (power >= 0) {
        for (var i = 0; i < power; i++){
            result = result*number;
        }
        console.log(result);
    } else {
        power = power*(-1);
        for (var i = 0; i < power; i++){
            result = result*number;
        }
        console.log(1/result);
    }
}
pow();
