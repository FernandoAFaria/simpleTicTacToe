document.addEventListener('DOMContentLoaded', function(){
    let cells = document.getElementsByClassName('cell');

let turn = 2;
let display = document.getElementById('display');
let container = document.getElementById('container');






    


     




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
    if (display.innerHTML != "") {
        console.log("WORK DAMNIT");
        resetAll();
    }
    if (turn == 11) {
        display.innerHTML = "Draw :(";
    }
    
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
        cells[0].style.animation = "spin1 1s alternate linear infinite";
        cells[1].style.animation = "spin1 1s alternate linear infinite";
        cells[2].style.animation = "spin1 1s alternate linear infinite";
    }
    if (four == 'X' && five == 'X' && six == 'X') {
        display.innerHTML = "X WINS";
        cells[3].style.animation = "spin1 1s alternate linear infinite";
        cells[4].style.animation = "spin1 1s alternate linear infinite";
        cells[5].style.animation = "spin1 1s alternate linear infinite";
    }
    if (seven == 'X' && eight == 'X' && nine == 'X') {
        display.innerHTML = "X WINS";
        cells[6].style.animation = "spin1 1s alternate linear infinite";
        cells[7].style.animation = "spin1 1s alternate linear infinite";
        cells[8].style.animation = "spin1 1s alternate linear infinite";
    }
    if (one == 'X' && four == 'X' && seven == 'X') {
        display.innerHTML = "X WINS";
        cells[0].style.animation = "spin1 1s alternate linear infinite";
        cells[3].style.animation = "spin1 1s alternate linear infinite";
        cells[6].style.animation = "spin1 1s alternate linear infinite";
    }
    if (two == 'X' && five == 'X' && eight == 'X') {
        display.innerHTML = "X WINS";
        cells[1].style.animation = "spin1 1s alternate linear infinite";
        cells[4].style.animation = "spin1 1s alternate linear infinite";
        cells[7].style.animation = "spin1 1s alternate linear infinite";
    }
    if (three == 'X' && six == 'X' && nine == 'X') {
        display.innerHTML = "X WINS";
        cells[2].style.animation = "spin1 1s alternate linear infinite";
        cells[5].style.animation = "spin1 1s alternate linear infinite";
        cells[8].style.animation = "spin1 1s alternate linear infinite";
    }
    if (one == 'X' && five == 'X' && nine == 'X') {
        display.innerHTML = "X WINS";
        cells[0].style.animation = "spin1 1s alternate linear infinite";
        cells[4].style.animation = "spin1 1s alternate linear infinite";
        cells[8].style.animation = "spin1 1s alternate linear infinite";
    }
    if (three == 'X' && five == 'X' && seven == 'X') {
        display.innerHTML = "X WINS";
        cells[2].style.animation = "spin1 1s alternate linear infinite";
        cells[4].style.animation = "spin1 1s alternate linear infinite";
        cells[6].style.animation = "spin1 1s alternate linear infinite";
    }

    /*CHECK IF O WINS */

    if (one == 'O' && two == 'O' && three == 'O') {
        display.innerHTML = "O WINS";
        cells[0].style.animation = "spin1 1s alternate linear infinite";
        cells[1].style.animation = "spin1 1s alternate linear infinite";
        cells[2].style.animation = "spin1 1s alternate linear infinite";
    }
    if (four == 'O' && five == 'O' && six == 'O') {
        display.innerHTML = "O WINS";
        cells[3].style.animation = "spin1 1s alternate linear infinite";
        cells[4].style.animation = "spin1 1s alternate linear infinite";
        cells[5].style.animation = "spin1 1s alternate linear infinite";
    }
    if (seven == 'O' && eight == 'O' && nine == 'O') {
        display.innerHTML = "O WINS";
        cells[6].style.animation = "spin1 1s alternate linear infinite";
        cells[7].style.animation = "spin1 1s alternate linear infinite";
        cells[8].style.animation = "spin1 1s alternate linear infinite";
    }
    if (one == 'O' && four == 'O' && seven == 'O') {
        display.innerHTML = "O WINS";
        cells[0].style.animation = "spin1 1s alternate linear infinite";
        cells[3].style.animation = "spin1 1s alternate linear infinite";
        cells[6].style.animation = "spin1 1s alternate linear infinite";
    }
    if (two == 'O' && five == 'O' && eight == 'O') {
        display.innerHTML = "O WINS";
        cells[1].style.animation = "spin1 1s alternate linear infinite";
        cells[4].style.animation = "spin1 1s alternate linear infinite";
        cells[7].style.animation = "spin1 1s alternate linear infinite";
    }
    if (three == 'O' && six == 'O' && nine == 'O') {
        display.innerHTML = "O WINS";
        cells[2].style.animation = "spin1 1s alternate linear infinite";
        cells[5].style.animation = "spin1 1s alternate linear infinite";
        cells[8].style.animation = "spin1 1s alternate linear infinite";
    }
    if (one == 'O' && five == 'O' && nine == 'O') {
        display.innerHTML = "O WINS";
        cells[0].style.animation = "spin1 1s alternate linear infinite";
        cells[4].style.animation = "spin1 1s alternate linear infinite";
        cells[8].style.animation = "spin1 1s alternate linear infinite";
    }
    if (three == 'O' && five == 'O' && seven == 'O') {
        display.innerHTML = "O WINS";
        cells[2].style.animation = "spin1 1s alternate linear infinite";
        cells[4].style.animation = "spin1 1s alternate linear infinite";
        cells[6].style.animation = "spin1 1s alternate linear infinite";
    }

 

    function resetAll() {
        turn = 2;

        display.innerHTML = "";
        cells[0].innerHTML = "";
        cells[1].innerHTML = "";
        cells[2].innerHTML = "";
        cells[3].innerHTML = "";
        cells[4].innerHTML = "";
        cells[5].innerHTML = "";
        cells[6].innerHTML = "";
        cells[7].innerHTML = "";
        cells[8].innerHTML = "";
        
      
        cells[0].style.animation = "none";
        cells[1].style.animation = "none";
        cells[2].style.animation = "none";
        cells[3].style.animation = "none";
        cells[4].style.animation = "none";
        cells[5].style.animation = "none";
        cells[6].style.animation = "none";
        cells[7].style.animation = "none";
        cells[8].style.animation = "none";

    }

}








})