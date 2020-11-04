let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnStar = document.getElementById("btnStar");
let btnEquals = document.getElementById("btnEquals");
let result = document.getElementById("result");
let i = 1;
let value1 =0;
let value2 = 0;

function calculate()
{   

    if(i%2==1){
         value1 = result.value;
         result.value ="";
    }

    else{
        value2 = result.value;
    }
    i++;
    setValues(value1,value2);

   
}
function setValues(a,b){
    a= parseInt(value1);
    b=parseInt(value2);

    console.log(a,b);

    if(btnEquals.click){
        calculateStar(a,b);
        
    }
  
}

function numberBtnClick(value)
{

    if(value === 1)
    {
           result.value += btn1.value;
    }

    if(value === 2)
    {
        result.value += btn2.value;
    }

    if(value === 3)
    {
        result.value += btn3.value;
    }

    if(value === 4)
    {
        result.value += btn4.value;
    }
    
    if(value === 5)
    { 
        result.value += btn5.value;
    }
    
    if(value === 6)
    {
        result.value += btn6.value;
    }
    
    if(value === 7)
    {
        result.value += btn7.value;
    }
    
    if(value === 8)
    { 
        result.value += btn8.value;
    }

    if(value === 9)
    {  
        result.value += btn9.value;
    }

    if(value === 0)
    {
        result.value += btn0.value;
    }

    
    // let comma = ",";
    // if(value === comma){
    //     let btnComma = document.getElementById("btnComma").value;
    //     document.getElementById("result").value = btnComma;

    // }

}

function clearInput(){
    
    let btnClear = document.getElementById("btnClear").value;
    document.getElementById("result").value = btnClear;

}

function calculateStar(d,c){
    // let toplam = d+c;
    // return toplam;
    let d2 = 2*d;
    let cd = c*d;
    let toplam = d2+cd;
    console.log(toplam);

}




