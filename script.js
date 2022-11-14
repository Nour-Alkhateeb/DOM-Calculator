let output=document.getElementById('output');

let result

let operationLatchFlag = 0;
let dotLatchFlag=0;

function display(num){
    if ((num ===".") && (dotLatchFlag===0))
    { output.value +=num;  
        dotLatchFlag=1;
    }
    else if((num === '+' || num === '*' || num === '/' ) && (operationLatchFlag === 0) ){
        output.value +=num;   
        operationLatchFlag = 1;
        dotLatchFlag=0;
    }
    else if(num != '+' && num != '*' && num != '/'&& num!='.' ){
        output.value +=num;
        operationLatchFlag = 0;
    }  
}

function cleardisplay(){
    output.value = ''
    operationLatchFlag = 0;
dotLatchFlag=0;}

function calc(){
    result=eval(output.value);
    output.value=result;
    operationLatchFlag = 0;
}