let x = function() {
    console.log("im called from inside a function")
}


let y = function(callback) {
    console.log('y do something');
     callback(3,4,'add');
}

let z = function() {
    alert('z just got called')
}

let myhead = function() {
    console.log("start >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
}
let myfoot = function() {
    console.log("end <<<<<<<<<<<<<<<<<<<<<<<<<<<<")
}

let calc = function(n1,n2,callback) {
    return callback(n1,n2);

    // if(op ==='add') {
    //     return n1+n2;
    // } else if (op === 'minus') {
    //     return n1-n2;
    // } else if (op ==='multiply') {
    //     return n1*n2;
    // } else {
    //     return n1/n2;
    // }
}

let add = function(a,b) {
    return a+b;
}
let multiply = function(a,b) {
    return a*b;
}

let echo = function(a,b) {
    console.log(`echoing numbers back: ${a} and ${b}`);
}

let mymax = function(a,b) {
   return Math.max(a,b);
}

let outputter = function(x,y,callback) {
    if (typeof callback ==='function')
        return callback(x,y);
    else 
        return "Sorry, callback must be of type function";
}

let arrayOutputter = function(arr,operation) {
    if (typeof operation ==='function')
        return arr.operation(x,y);
    else 
        return "Sorry, callback must be of type function";
}

let sort_by_name = function(a,b) {
    if (a.str > b.str) {
        return 1;
    } else {
        return -1;
    }
}

let sort_by_num = function(a,b) {
    if (a.num > b.num) {
        return 1;
    } else {
        return -1;
    }
}

var veganshit = [
    {
        num:5,
        str:'apple'
    },
    {
        num:7,
        str:'orange'
    },  
      {
        num:1,
        str:'banana'
    }
];

console.log(outputter(7,8,mymax));
//console.log(arrayOutputter(veganshit, sort_by_name));
veganshit.sort(sort_by_num)
console.log(veganshit);