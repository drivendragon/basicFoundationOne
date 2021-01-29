//Author Jaime Lizarazu

// 1) Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function get_array() {
    var arr = [];
    for(var i=1; i<256; i++){
        arr.push(i);
    }
    return arr; 
}
var x = get_array();
document.write(x);

// 2) Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function sum_even_numbers(){
    var sum = 0;
    var i=1;
    while(i<=1000){
        if(i%2===0){
            sum = sum+i;
        }
        i++;
    }
    return sum; 
}
var x = sum_even_numbers();
document.write(x);

// 3) Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sum_odd_numbers(){
    var sum = 0;
    var i=1;
    while(i<=5000){
        if(i % 2 !==0 ){
            sum = sum+i;
        }
        i++;
    }
    return sum; 
}
var x = sum_odd_numbers();
document.write(x);


// 4) Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArray(arr){
    arr = [1, 2, 3, 4, 5]
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}
var x = sumArray();
document.write(x);


// 5) Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
const array1 = [1, 3, 2];
console.log(Math.max(...array1));


// 6) Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
const nums = [1, 3];
function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
var x = average(nums);
document.write(x);


// 7) Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function get_odd_array() {
    var arr = [];
    for(var i=1; i<51; i++){
        if (i%2!==0) {
            arr.push(i);
        }
    }
    return arr; 
}
var x = get_odd_array();
document.write(x);

// 8)  Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

// 9) Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

// 10) Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

// 11) Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

// 12) Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

// 13) Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
