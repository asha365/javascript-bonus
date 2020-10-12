//1. local variable
//  function addTodo(task){
//      const newTaskElement = document.createElement('li');
// }
// console.log(newTaskElement);


//2. global variable
// var name = 'asha';

// function addUser(){
//     console.log(name);
// }
// addUser();

//3. global variable
// function addUser(){
//    var RomanticName = 'dear';
//     console.log(RomanticName);
// }
//  addUser();

//4. javascript iiFE (immediately invoking function) 
(function (){
    var RomanticName = 'dear';
     console.log(RomanticName);
 })();