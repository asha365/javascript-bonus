// function welComeGuest(name){
//     console.log(name);
// }
// const actorName = 'Tom Hanks';
// welComeGuest(actorName);



/*********************************/
/*********************************/
/*********************************/

function welComeGuest(name, greetHandler){
    greetHandler(name);
}

const actorName = 'Tom Hanks';

function greetMorning(name){
        console.log('Good Morning', name);
}
welComeGuest(actorName, greetMorning);