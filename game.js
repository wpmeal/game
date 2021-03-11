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

    displayPlayBoard() {
        let $i = 0;
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
            playBoard.append($li)
            playBoard.querySelector("li").append($input)



            $i++;


        });
    }




    readLetterFromPlayer() {
        let playerAnswer = playBoard.querySelectorAll("input")
   

        //console.log(ls);
        // console.log(playerAnswer);
        playerAnswer.forEach(el => {
            let $hr = document.createElement('hr');
            //  console.log(el.value);

            if (el.value != this.wordToBeGuessed_List[el.name]) {
                //    if  (el.value == "s"){
                document.querySelector("body").append($hr);
            }
        })


    }




}
const NewHangman = new Hangman(["m", "i", "s", "s", "i", "o", "n"], ["", "", "", "s", "", "o", ""]);
document.getElementById("submit").addEventListener("click", () => {

    NewHangman.readLetterFromPlayer();
});


