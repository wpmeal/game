class Hangman {

    constructor(wordToBeGuessed_List, hintLettersShowedToPlayer_List) {
        this.wordToBeGuessed_List = wordToBeGuessed_List
        this.hintLettersShowedToPlayer_List = hintLettersShowedToPlayer_List
        this.displayPlayBoard();
    }

    /*
let wordToBeGuessed =  "Mission";
let hintLettersShowedToPlayer_List =
["", "", "", "s","", "o", ""];

*/
    playBoard = document.querySelector('#playBoard')
    stickman = document.querySelector('#stickman')
    misstakenGuess = 0;
    context = stickman.getContext('2d');




    displayPlayBoard() {
        let $i = 0;
        let $ul = document.createElement('ul');
        playBoard.prepend($ul)


        this.hintLettersShowedToPlayer_List.forEach(el => {
            /* this.playBoard.appendChild(document.createElement('li'))
             .appendChild(document.createElement('input'))
             .setAttribute("name", $i)); */

            // this.playBoard.append(`<li><input type="text" name=${$i}> </li>`);

            let $li = document.createElement('li');
            let $input = document.createElement('input');
            $input.setAttribute("name", $i);
            // console.log(el);
            $input.setAttribute("value", el);
            playBoard.querySelector("ul").append($li);
            playBoard.querySelector("li:last-child").append($input);
            $i++;


        });
    }




    readLetterFromPlayer() {
        this.misstakenGuess = 0;
        let playerAnswer = playBoard.querySelectorAll("input")

        //console.log(ls);
        // console.log(playerAnswer);
        playerAnswer.forEach(el => {
          //  let $hr = document.createElement('hr');
            //  console.log(el.value);

            if (el.value != this.wordToBeGuessed_List[el.name]) {
                this.misstakenGuess++;
                //    if  (el.value == "s"){
                //   document.querySelector("body").append($hr);
                //  myStickman = document.getElementById("stickman");
                // console.log(stickman);
            }


        })


    }

    drawHangManFigure() {
        this.context.clearRect(0, 0, stickman.width, stickman.height);
        console.log(this.misstakenGuess);

        switch (this.misstakenGuess) {
            case 0:
                alert("U won!");
                break;
            case 1:
                this.drawHangManAxises();
                break;
            case 2:
                this.drawHangManAxises();
                this.drawHangManHead();
                break;
            case 3:
                this.drawHangManAxises();
                this.drawHangManHead();
                this.drawHangManBody();
                break;
            default:
                this.drawHangManAxises();
                this.drawHangManHead();
                this.drawHangManBody();
                this.drawHangManLegs();
                this.drawHangManArms();


        }

    }

    drawHangManAxises() {

        // context.beginPath();
        // context.strokeStyle = "#c51818";
        // context.lineWidth = 10;

        this.context.beginPath();

        this.context.moveTo(0, 0);
        this.context.lineTo(0, 400);
        this.context.stroke();

        this.context.moveTo(0, 0);
        this.context.lineTo(100, 0);
        this.context.stroke();

        this.context.moveTo(100, 0);
        this.context.lineTo(100, 30);
        this.context.stroke();
    }



    drawHangManHead() {
        // the head
        this.context.beginPath();
        this.context.arc(100, 50, 20, 0, 2 * Math.PI);
        this.context.stroke();
    }

    drawHangManBody() {
        // body
        this.context.moveTo(100, 70);
        this.context.lineTo(100, 100);
        this.context.stroke();

    }
    // drawHangManArms() {
    //     // body
    //     this.context.moveTo(100, 70);
    //     this.context.lineTo(30, 170);
    //     this.context.stroke();

    // }
    drawHangManLegs() {
        // legs left
        this.context.moveTo(100, 100);
        this.context.lineTo(30, 200);
        this.context.stroke();

        this.context.moveTo(100, 100);
        this.context.lineTo(150, 300);
        this.context.stroke();
    }





}
const NewHangman = new Hangman(["m", "i", "s", "s", "i", "o", "n"], ["", "", "", "s", "", "o", ""]);
document.getElementById("submit").addEventListener("click", () => {

    NewHangman.readLetterFromPlayer();
    NewHangman.drawHangManFigure();
});


