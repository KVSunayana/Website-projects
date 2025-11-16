var display = document.querySelector("#display")
var button = document.querySelectorAll(".button")
var operand1 = 0;
var operand2 = null;
var operator = null;
for(var i = 0; i<button.length; i++){
    button[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value')
        if(value == '+'){
            operator = '+';
            operand1 = parseFloat(display.textContent)
            display.innerHTML = ""
        }
        else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent)
            display.innerHTML = ""
        }
        else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(display.textContent)
            display.innerHTML = ""
        }
        else if(value == '/'){
            operator = '/';
            operand1 = parseFloat(display.textContent)
            display.innerHTML = ""
        }
        else if(value == '%'){
            operator = '%';
            operand1 = parseFloat(display.textContent)
            display.innerHTML = ""
        }
        else if(value == 'CE'){
            
            operand1 = parseFloat(display.textContent)
            if(operand1!=0 || operand2!=null){
                operand2 = parseFloat(display.textContent)

                if(operator == null){
                    if(operand1 === NaN){
                        display.innerHTML = ""
                    }
                    else{
                        let operandUpdated = operand1.toString();
                        let final = operandUpdated.substring(0,operandUpdated.length-1)
                        
                        if(final== ""){
                            operand1 = final;
                            display.innerHTML = final;
                        }else{
                            let changefinal = Number(final)
                            operand1 = changefinal;
                            display.innerHTML = operand1;
                        }
                    }
                }
                else{
                    let operand2Updated = operand2.toString();
                    let final2 = operand2Updated.substring(0,operand2Updated.length-1)
                    console.log(final2)
                    if(final2== ""){
                        operand2 = final2;
                        display.innerHTML = final2;
                    }else{
                        let change2final = Number(final2)
                        operand2 = change2final;
                        display.innerHTML = operand2;
                    }
                }
            }
        }
        else if(value == "="){
            if(operator == "%"){
                operand2 = parseFloat(display.textContent)
                let newOutput = (Number(operand1)/100)*Number(operand2);
                display.innerHTML = newOutput
            }else{
                operand2 = parseFloat(display.textContent)
                let text = operand1+" "+operator+" "+operand2
                let output = eval(text)
                display.innerHTML = output
            }
            
        }else if(value == "AC"){
            display.innerHTML = ""
            operand1 = 0;
            operand2 = null;
            operator = null;
        }
        else{
            display.innerHTML +=value;
        }
    })
}