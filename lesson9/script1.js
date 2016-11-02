/**
 * Created by agent on 26.09.2016.
 */

// setInterval() , setTimeout()
/*
var counter = 0;
var someFunction = function () {
    console.log(this);
    counter++;
    if (counter == 5){

        clearInterval(timerId);
    }
}
var timerId = setInterval(someFunction, 3000);
*/

/*
var c = new Object();

var d = new Array();

console.log(c);
console.log(d);
*/

/*
function Animal(name, color) {

    var self = this;

    var abc  = 'internal variable';

    name = name.toUpperCase();
    self.name = name;
    self.color = color;
    self.noise = function () {
        console.log('public');
        self._noise();

    }
    self._noise = function () {
        alert('woof, I am ' + self.name);
    }
}

var dog = new Animal('Tuzik', 'gray');

console.log(dog.name);


dog.noise();*/

//calculate.call(context, arg1, arg2, ...)

/*
function calculateMoney(a, b) {
    console.log('I am ' + this.firstName + ' ' + this.lastName + ' have ' + (a + b) + ' dollars');
}

var context = {
    firstName: 'Vasya',
    lastName: 'Pupkin'
};
calculateMoney.call(context, 5, 3);

calculateMoney.apply(context, [5, 3]);
*/
/*


function printArguments() {
    var args = [].slice.call(arguments);
    args.push('test');
    console.log(args);
}
printArguments(1, 2, 3);

*/

var time = new Date();
console.log(time.getTime());






