
var item7 = document.getElementsByClassName("grid-item7");

item7[0].addEventListener("click",displayValue);
 
var item8 = document.getElementsByClassName("grid-item8");

item8[0].addEventListener("click",displayValue);

var item9 = document.getElementsByClassName("grid-item9");

item9[0].addEventListener("click",displayValue);

var item4 = document.getElementsByClassName("grid-item4");

item4[0].addEventListener("click",displayValue);

var item5 = document.getElementsByClassName("grid-item5");

item5[0].addEventListener("click",displayValue);

var item6 = document.getElementsByClassName("grid-item6");

item6[0].addEventListener("click",displayValue);

var item1 = document.getElementsByClassName("grid-item1");

item1[0].addEventListener("click",displayValue);

var item2 = document.getElementsByClassName("grid-item2");

item2[0].addEventListener("click",displayValue);

var item3 = document.getElementsByClassName("grid-item3");

item3[0].addEventListener("click",displayValue);

var item0 = document.getElementsByClassName("grid-item0");

item0[0].addEventListener("click",displayValue);

var itemadd = document.getElementsByClassName("grid-itemadd");

itemadd[0].addEventListener("click",displayValue);

var itemsub = document.getElementsByClassName("grid-itemsub");

itemsub[0].addEventListener("click",displayValue);

var itemdivi = document.getElementsByClassName("grid-itemdivi");

itemdivi[0].addEventListener("click",displayValue);

var itemx = document.getElementsByClassName("grid-itemx");

itemx[0].addEventListener("click",displayValue);

var itemdeci = document.getElementsByClassName("grid-itemdeci");

itemdeci[0].addEventListener("click",displayValue);

var itemreset = document.getElementsByClassName("grid-itemRESET");
itemreset[0].addEventListener("click",clearValue);

var itemres = document.getElementsByClassName("grid-itemres");
itemres[0].addEventListener("click",displayResult);

var itemdel = document.getElementsByClassName("grid-itemDEL");
itemdel[0].addEventListener("click",delLastResult);


var result = 0;
var isOperator = false;
var isDecimal = false;
var decimalUsed = false;

function displayLatestValue(result){
    document.getElementById("resultbox").value = result;
}

function displayValue(id){

    if(!isNaN(+id.target.innerText)){
        result = result + (+id.target.innerText);
        displayLatestValue(result);
        isOperator = false;
    }
    else{
       if(!isOperator){
        if(!isDecimal || (id.target.innerText != '.')){
            result = result + id.target.innerText;
            displayLatestValue(result);
            isOperator = true;
            if((id.target.innerText) === '.'){
                isDecimal = true;
                decimalUsed = true;
            }
            else{
                isDecimal = false;
            }
        }
        else{
            console.log("please use a number after decimal.")
        }
       }
       else{
        console.log("Choose other number");
        
       }
    }

}

function clearValue(){
    result = "";
    displayLatestValue(result);
    isOperator = false;
    isDecimal = false;
}
 
function displayResult(){
    if(isOperator){
        console.log("Result can't be viewed as an operator is the last input.")
    }
    else{
        let formattedValue = result.replace(/x/g, '*');
        let displayFinalResult = eval(formattedValue);
        if(decimalUsed){
            let decimalResult = displayFinalResult.toFixed(3);
            displayLatestValue(decimalResult);
        }
        else{
            displayLatestValue(displayFinalResult);
        }
        
    }
}

function delLastResult(){
    
    let lastInput = result.charAt(result.length -1);
    if(isDecimal){
        if(!(lastInput.isNaN)){
            let new_result = result.slice(0,((result.length) - 1));
            result = new_result;
            displayLatestValue(result);
        }
        if(lastInput.isNaN){
            let new_result = result.slice(0,((result.length) - 1));
            result = new_result;
            isDecimal = false;
            displayLatestValue(result);
        }
    }

    if(!isDecimal){
        if(!(lastInput.isNaN)){
            let new_result = result.slice(0,((result.length) - 1));
            result = new_result;
            let secondLast = result.charAt(result.length -1);
            if(isNaN(secondLast)){
                isOperator = true;
            }
            displayLatestValue(result);
        }
        if(lastInput.isNaN){
            let new_result = result.slice(0,((result.length) - 1));
            result = new_result;
            displayLatestValue(result);
        }
    }
    
}

