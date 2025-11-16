// Problem statement
// Create an IIFE which returns two functions, increase and initialize. The function initialize will take an initial value of the counter and increment would increase the counter by 1 and return it.

// For initial value 1 it will give 2,3,4...
//Write your function here


const counter = (function () {
    // Write the logic here
    var num = 0;
    function increase() {
        num++;
        return num;
    }
    function initialize(initialvalue) {
        num = initialvalue
        return num;
    }
    return {
        increase: increase,
        initialize: initialize
    };
    console.log(num);
})()



// Input and output has already been handled for you



process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
    let lines = chunk.toString().split(' ');
    let start = lines[0];
    let n = lines[1];
    let ans = ''
    counter.initialize(start)
    for(let i=0;i<n;i++) {
        ans += counter.increase()+'\n'
    }

    process.stdout.write(ans);
    process.exit();
});




// Problem statement
// Complete a function modifyArray() which takes an array of integers and returns an array of elements. The result array will contain the double of all the positive elements of the input array and all the negative elements will be removed(including 0). Higher order array methods should be used to achieve the following. Remove any element which is not a number. The operations should be stable.

// modifyArray([1,2,-1,undefined,0,7]) // Returns [2,4,14]


function modifyArray(arr) {
    // Write the logic here
    arr1=[]
    for (var i = 0; i <= arr.length; i++){
        // if (arr[i] <= 0 or arr[i] == null){
        //     arr.remove(i);
        // } else {
        //     num = arr[i] * 2;
        //     arr1.push(num);
        // }
        if (arr[i] > 0) {
            num = arr[i] * 2;
            arr1.push(num);
        }
    }
    return arr1
}

// Input and output has already been handled for you

process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
    let arr = chunk.toString().split(' ');
    arr = arr.map((val) => parseInt(val))
    
    let ans = modifyArray(arr)
    ans = ans.join(' ')
    
    process.stdout.write(ans);
    process.exit();
});