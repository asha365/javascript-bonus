// function getFullName(firstName, lastName){
//     const fullName = firstName + ' ' + lastName;
//     return fullName;
// }
// const name = getFullName('Hanif', 'Poribohon');
//             console.log(name);


/***************************************/
/***************************************/
/***************************************/

//3 pera meter names (array like object)
// function getFullName(firstName, lastName){
//     console.log(arguments);
//     const fullName = firstName + ' ' + lastName;
//     return fullName;
// }
// const name = getFullName('rafid', 'songket', 'bin', 'Hanif', 'songket', 'Poribohon');
//             console.log(name);



/***************************************/
/***************************************/
/***************************************/

// //argument to array convert
// function getFullName(firstName, lastName){
//     let fullName = '';
//     const result = [...arguments].join(' ')
//     for(let i = 0; i < arguments.length; i++){
//         const namePart = arguments[i];
//         fullName = fullName + ' ' + namePart;
//     }
//     return fullName;
// }
// const name = getFullName('rafid', 'songket', 'bin', 'Hanif', 'songket', 'Poribohon');
//             console.log(name);



/***************************************/
/***************************************/
/***************************************/


 //any pera meter
 function getFullName(firstName, lastName){
     let fullName = '';
     for(let i = 0; i < arguments.length; i++){
         const namePart = arguments[i];
         fullName = fullName + ' ' + namePart;
     }
     return fullName;
 }
 const name = getFullName('rafid', 'songket', 'bin', 'Hanif', 'songket', 'Poribohon');
             console.log(name);