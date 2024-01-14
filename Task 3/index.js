let resultTxt = "";
let result;

const resultElement = document.getElementById("result");

document.getElementById("calc-btns").addEventListener("click", (event) => {
    if(event.target.className == "btn"){
        switch(event.target.innerText){
            case "AC":
                resultTxt = "";
                resultElement.innerText = "";
                break;
            case "+":
                resultTxt += "+";
                resultElement.innerText = "";
                break;
            case "-":
                resultTxt += "-";
                resultElement.innerText = "";
                break;
            case "*":
                resultTxt += "*";
                resultElement.innerText = "";
                break;
            case "/":
                resultTxt += "/";
                resultElement.innerText = "";
                break; 
            case "=":
                result = eval(resultTxt);
                resultElement.innerText = result;
                break;
            case "%":
                resultTxt += "%";
                resultElement.innerText = "";
                break;
            case "+/-":
                if(resultTxt){
                    resultTxt += "*-1";
                    result = eval(resultTxt);
                    resultElement.innerText = result;    
                }
                break;
            default:
                resultElement.innerText += event.target.innerText;
                resultTxt += event.target.innerText;
                break; 
        }
    }
});