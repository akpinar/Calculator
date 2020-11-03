let numbers = document.querySelectorAll("#btn");
let btnStar = document.querySelector("#btnStar");
let form = document.getElementById("#form");


// for (let i = 0; i<numbers.length;i++)
//     numbers[i].onclick = calculate;

// function calculate()
// {
    
    
// }
function numberBtnClick(value)
{

    if(value === 1){

        let btn1 = document.getElementById("btn1").value;
        document.getElementById("result").value = btn1;
    }

    if(value === 2){

         let btn2 = document.getElementById("btn2").value;
         document.getElementById("result").value = btn2;
    }

    if(value === 3){

        let btn3 = document.getElementById("btn3").value;
        document.getElementById("result").value = btn3;
    }

    if(value === 4){

         let btn4 = document.getElementById("btn4").value;
         document.getElementById("result").value = btn4;
    }

    if(value === 5){

        let btn5 = document.getElementById("btn5").value;
        document.getElementById("result").value = btn5;
    }

    if(value === 6){

    let btn6 = document.getElementById("btn6").value;
    document.getElementById("result").value = btn6;
    }

    if(value === 7){

    let btn7 = document.getElementById("btn7").value;
    document.getElementById("result").value = btn7;
    }

    if(value === 8){

    let btn8 = document.getElementById("btn8").value;
    document.getElementById("result").value = btn8;
    }   

    if(value === 9){

    let btn9 = document.getElementById("btn9").value;
    document.getElementById("result").value = btn9;
    }

    if(value === 0){

    let btn0 = document.getElementById("btn0").value;
    document.getElementById("result").value = btn0;
    }   

}






