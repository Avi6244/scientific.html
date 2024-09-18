/*let backBtn = document.querySelector(".container .scientific-btns .back-btn");
let scientificBtnBox = document.querySelector(".container .scientific-btns");
let container = document.querySelector(".container");
let input = document.querySelector(".container .input-box input");
let result = document.querySelector(".container .input-box .result");
let allBtns = document.querySelectorAll(".container .btn");
for (let item of allBtns){
    item.addEventListener("click",(e)=>{
        let btnText = e.target.innerHTML;
        if(btnText == "X"){
            btnText = '*';
        }
        input.value += btnText;
    })
}
let calculate =() =>{
    result.innerHTML = eval(input.value);
}
let backspace =() =>{
    input.value = input.value.slice(0, -1);
}
let sin =()=>{
    result.innerHTML = Math.sin(result.innerHTML);
}
let cos =()=>{
    result.innerHTML = Math.cos(result.innerHTML);
}
let tan =()=>{
    result.innerHTML = Math.tan(result.innerHTML);
}
let log =()=>{
    result.innerHTML = Math.log(result.innerHTML);
}
let root =()=>{
    result.innerHTML = Math.sqrt(result.innerHTML, 2);
}
let pi =()=>{
    input.value = 3.14;
}
let power =()=>{
    result.innerHTML = Math.pow(result.innerHTML, 2);
}
backBtn.addEventListener("click",()=>{
    scientificBtnBox.classList.toggle("active");
})
let clearInput =() =>{
    input.value = '';
    result.innerHTML = 0;
}*/
let result = document.querySelector('.container .result-box input');
let btns = document.querySelectorAll('.container .btns-box .btn');
let evalBtn = document.querySelector('.container .btns-box .eval-btn');
let clrBtn = document.querySelector('.container .btns-box .clr-btn');
let delBtn = document.querySelector('.container .btns-box .delete-btn');

let getValue =(e)=>{
  let btnText = e.target.innerHTML;
  if(btnText == '×'){
     btnText = '*'    
  }
  if(btnText == '÷'){
     btnText = '/';   
  }
  result.value += btnText;
}

evalBtn.addEventListener('click',()=>{
 try{
   result.value = eval(result.value);   
 }catch(err){
   result.value = 'Error';    
 }    
})

clrBtn.addEventListener('click',()=>{
  result.value = '';     
});

delBtn.addEventListener('click',()=>{
  result.value = result.value.substr(0,result.value.length - 1);
})

for(let i=0;i<btns.length;i++){
  btns[i].addEventListener('click',getValue)  
}
