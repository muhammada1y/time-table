//let multi = " ";


//const mult =(num)=>{

//for(let i=1; i<11; i++){
    //multi += "2 x "+i +"="+ i*num +"<br>";
//}
//}


const mult =(num)=>{
    let multi = " ";
    for(let i=1; i<11; i++){
      multi +=num+"x"+i+"="+ i*num +"<br>";
    }
    return multi
    }

document.getElementById("demo").innerHTML=mult(2);


document.getElementById("demo2").innerHTML=mult(3);

document.getElementById("demo3").innerHTML=mult(4);

document.getElementById("demo4").innerHTML=mult(5);

document.getElementById("demo5").innerHTML=mult(6);

document.getElementById("demo6").innerHTML=mult(7);

document.getElementById("demo7").innerHTML=mult(8);

document.getElementById("demo8").innerHTML=mult(9);

document.getElementById("demo9").innerHTML=mult(10);


