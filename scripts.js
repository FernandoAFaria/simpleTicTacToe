document.addEventListener('DOMContentLoaded', function(){

let cells = document.getElementsByClassName('cell');
let turn = 2;
let display = document.getElementById('display');

for(var i = 0; i < cells.length; i++){

    cells[i].addEventListener('click', function () {
        this.style.animation = "spin 1s alternate infinite";

        if(this.innerHTML == 'X' || this.innerHTML == 'O'){
            alert('This block is already taken!');
        }
        
        else if(turn % 2 == 0){
        this.innerHTML = "X";
        turn++;
        } else{
            this.innerHTML = 'O';
            turn++;
        }
       

        checker();


    });



}


function checker(){
    if (turn == 11) {
        display.innerHTML = "Draw :(";
    }
    let cells = document.getElementsByClassName('cell');
    
    let one = cells[0].innerHTML;
    let two = cells[1].innerHTML;
    let three = cells[2].innerHTML;
    let four = cells[3].innerHTML;
    let five = cells[4].innerHTML;
    let six = cells[5].innerHTML;
    let seven = cells[6].innerHTML;
    let eight = cells[7].innerHTML;
    let nine = cells[8].innerHTML;
    /* CHECK IF X WINS*/

    if(one == 'X' && two == 'X' && three == 'X'){
        display.innerHTML = "X WINS";
    }
    if (four == 'X' && five == 'X' && six == 'X') {
        display.innerHTML = "X WINS";
    }
    if (seven == 'X' && eight == 'X' && nine == 'X') {
        display.innerHTML = "X WINS";
    }
    if (one == 'X' && four == 'X' && seven == 'X') {
        display.innerHTML = "X WINS";
    }
    if (two == 'X' && five == 'X' && eight == 'X') {
        display.innerHTML = "X WINS";
    }
    if (three == 'X' && six == 'X' && nine == 'X') {
        display.innerHTML = "X WINS";
    }
    if (one == 'X' && five == 'X' && nine == 'X') {
        display.innerHTML = "X WINS";
    }
    if (three == 'X' && five == 'X' && seven == 'X') {
        display.innerHTML = "X WINS";
    }

    /*CHECK IF O WINS */


    if (one == 'O' && two == 'O' && three == 'O') {
        display.innerHTML = "O WINS";
    }
    if (four == 'O' && five == 'O' && six == 'O') {
        display.innerHTML = "O WINS";
    }
    if (seven == 'O' && eight == 'O' && nine == 'O') {
        display.innerHTML = "O WINS";
    }
    if (one == 'O' && four == 'O' && seven == 'O') {
        display.innerHTML = "O WINS";
    }
    if (two == 'O' && five == 'O' && eight == 'O') {
        display.innerHTML = "O WINS";
    }
    if (three == 'O' && six == 'O' && nine == 'O') {
        display.innerHTML = "O WINS";
    }
    if (one == 'O' && five == 'O' && nine == 'O') {
        display.innerHTML = "O WINS";
    }
    if (three == 'O' && five == 'O' && seven == 'O') {
        display.innerHTML = "O WINS";
    }



}








})