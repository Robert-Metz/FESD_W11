let button = document.getElementsByClassName('btn');
let content = document.getElementById('content');
let restart = document.getElementById('restart');
let playerTurn = 'X';


// victory conditions
let topRow = document.querySelectorAll('#b1, #b2, #b3');
let midRow = document.querySelectorAll('#b4, #b5, #b6');
let btmRow = document.querySelectorAll('#b7, #b8, #b9');
let diagonal1 = document.querySelectorAll('#b1, #b5, #b9');
let diagonal2 = document.querySelectorAll('#b3, #b5, #b7');
let leftCol = document.querySelectorAll('#b1, #b4, #b7');
let midCol = document.querySelectorAll('#b2, #b5, #b8');
let rightCol = document.querySelectorAll('#b3, #b6, #b9');

let conditions = [topRow, midRow, btmRow, diagonal1, diagonal2, leftCol, midCol, rightCol];

// make clicks match the top content and mark the button
for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        button[i].disabled = true;
        if (playerTurn == 'O') {
            button[i].innerHTML = 'O'
            playerTurn = 'X';
            content.innerHTML = 'X';
            boardCheck(conditions);
        }  
        else {
            button[i].innerHTML = 'X';
            playerTurn = 'O';
            content.innerHTML = 'O';
            boardCheck(conditions);

        }
    })
}

// reset boards and buttons
restart.addEventListener('click', () => {
    for(let i = 0; i < button.length; i++) {
        button[i].innerHTML = '';
        button[i].disabled = false;
    }
    playerTurn = 'X';
    content.innerHTML ='X'; 
    document.getElementById('winnerId').innerHTML = `The Winner Is...`;
})

//check for victory function
function victoryCheck(square1, square2, square3) {
    console.log(square1,square2,square3);
    if(square1 === square2 && square2 === square3) {
        document.getElementById('winnerId').innerHTML = `The Winner Is... ${square1}`;
    }
}

function boardCheck(conditions) {
    for(let i = 0; i < conditions.length; i++) {
        const square1 = conditions[i][0].innerHTML;
        const square2 = conditions[i][1].innerHTML;
        const square3 = conditions[i][2].innerHTML;
        victoryCheck(square1, square2, square3);
    }

}
