let a = null;
let buffer = "0";
let lastOperator = null;
const display = document.querySelector(".display");

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleValue(value);
    }
    rerender();
}

function rerender(){
    display.innerText = buffer;
}

function handleValue(value){
    buffer = (parseInt(buffer) * 10 + parseInt(value)).toString();
}

function handleSymbol(value){
    if(value === "←"){
        if(buffer.length == 1)
            buffer = "0";
        else
            buffer = buffer.substring(0, buffer.length - 1);
    }
    else if(value === "C"){
        a = 0;
        buffer = 0;
        lastOperator = null;
    }
    else if(value === "="){
        if(lastOperator === null)
            return;
        buffer = operation();
    }
    else{
        if(lastOperator !== null)
            return;
        lastOperator = value;
        a = parseInt(buffer);
        buffer = "0";
    }
}
function operation(){
    let b = parseInt(buffer);
    switch(lastOperator){
        case "+": 
            buffer = (a + b).toString();
            break;
        case "-":
            buffer = (a - b).toString();
            break;
        case "×":
            buffer = (a * b).toString();
            break;
        case "÷":
            buffer = (a / b).toString();
            break;
    }
    return buffer;
}
function init(){
    document.querySelector(".calc-buttons").addEventListener("click", function(event){
        buttonClick(event.target.innerText);
    });
}
init();