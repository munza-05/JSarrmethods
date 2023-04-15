//1:...pop...
//removes last element from array

var popmetho=[3,4,7,8,10];
popmetho.pop()
document.write('after pop:' +"</br></br>"+popmetho + "</br>");

//2:...push...
//adds an element at end of array

var pushmetho=['a','b','c','d'];
pushmetho.push('g')
document.write('after push:' +"<br></br>" +pushmetho + "</br>");

//3:..shift..

// removes an element at index 0(beginning)

var shifmetho=['a','b','c','d'];
shifmetho.shift()
document.write('after shifiting:' +"<br></br>" +shifmetho + "</br>");

//..unshift..

// adds an element at index 0(beginning)
var unshifmetho=['a','b','c','d'];
unshifmetho.unshift('m')
document.write('after unshifiting:' +"<br></br>" +unshifmetho + "</br>");

//...slice...

//slices out a piece of an array into a new array..start picking the values from the given index(including it) and return them with new array

var slice1=[3,6,8,9,14,5];
var slice2=slice1.slice(3);
document.write('after slicing:' +"<br></br>" +slice2 + "</br>")

//..splice..
//can be used to add(splice) elemnt to an array
var splicemetho=['a','b','c','d', 'r','w'];
splicemetho.splice(3,2,'m','n')
document.write('after splicing:' +"<br></br>" +splicemetho + "</br>");

//..find..
// returns the value of the first element in an array that passes a test

var age=[5,10,18,30,29];
function checkage(age){
    return age<18;
}
document.write('finding:' +"<br></br>" +age.find(checkage) + "</br>");

//..findindex..
//returns the index of the first element in an array that passes a test

var age2=[5,10,18,30,29];
function myage(age2){
    return age2>18;
}
document.write('findindex:' +"<br></br>" +age2.findIndex(myage)  + "</br>");

//..filter..
// creates a new array filled with elements that pass a test provided by a function.

var arr1=[5,10,18,30,29,6];
var arr2=arr1.filter(myfun);
function myfun(arr){
    return arr<10;
}
document.write('filter:' +"<br></br>" +arr2.filter(myfun)  + "</br>");

//..reduce..
// returns a single value: the function's accumulated result.

var array=[3,2,3,5,9,6];
function myfun(a,b){
    return a*b;//'a' is accumulator(1st value), 'b' is used for all other values...all "b" values will be added and then result will be multy by "a"
}
document.write(' after reducing:' +"<br></br>" +array.reduce(myfun)  + "</br>");

//...reverse...
//reverses the order of the elements in an array.
 
var rev=['a','b','c','d','e'];
rev.reverse();
document.write(' after reversing:' +"<br></br>" +rev);

