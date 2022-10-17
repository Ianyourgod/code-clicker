let money = 0;
let lines = 0;
let narration = 1;
let writing = false
let moneyValue = document.getElementById("money");
let linesValue = document.getElementById("lines");
let narrator = document.getElementById("narrator");
const narratelines = ["You found an easter egg! :)", "Hello, and welcome to code clicker! You have decided you want to become a coder. Click the 'Write code' button to write your first line!"];
// check updates
setInterval(() => {
    if (lines > 4 && narration>=1){
        moneyValue.value = "Money: " + money.toString();
    }
    linesValue.value = "Lines: " + lines.toString()
    narrator.value = narratelines[narration];
    
},1)
//write a line
function startwriting() {
    writing = true
    
    //set the button to "writing... 8.0 seconds remaining"
}
