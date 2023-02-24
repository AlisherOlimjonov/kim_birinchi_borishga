let value = document.querySelector("#value");
let btn = document.querySelector("#btn");
let resultp = document.querySelector("#resultp");
let resultb = document.querySelector("#resultb");
let resultc = document.querySelector("#resultc");
let resulta = document.querySelector("#resulta");
let comment = document.querySelector("#comment");
let refresh = document.querySelector("#refresh");


btn.addEventListener("click",(e)=>{
    let numberValue = +value.value;
 console.log( numberValue);
 people();
 bike();
 car();
 airplane();
});
refresh.addEventListener("click",()=>{
    window.location.reload();
})

function people(){
  let speedP=3.6;
  let timeP= Math.floor((+value.value)/speedP);
  resultp.textContent = `${timeP} h ${Math.floor((((+value.value)/speedP)- Math.floor((+value.value)/speedP))*60)} m ${Math.floor((((((+value.value)/speedP)- Math.floor((+value.value)/speedP))*60)-(Math.floor((((+value.value)/speedP)- Math.floor((+value.value)/speedP))*60)))*60)} s`
}

function bike(){
   let speedB=40;
   let timeB= Math.floor((+value.value)/speedB);
  resultb.textContent = `${timeB} h ${Math.floor((((+value.value)/speedB)- Math.floor((+value.value)/speedB))*60)} m ${Math.floor((((((+value.value)/speedB)- Math.floor((+value.value)/speedB))*60)-(Math.floor((((+value.value)/speedB)- Math.floor((+value.value)/speedB))*60)))*60)} s`
}

function car(){
  let speedC=70;
  let timeC= Math.floor((+value.value)/speedC);
  resultc.textContent = `${timeC} h ${Math.floor((((+value.value)/speedC)- Math.floor((+value.value)/speedC))*60)} m ${Math.floor((((((+value.value)/speedC)- Math.floor((+value.value)/speedC))*60)-(Math.floor((((+value.value)/speedC)- Math.floor((+value.value)/speedC))*60)))*60)} s`
}

function airplane(){
   let speedA=800;
   let timeA= Math.floor((+value.value)/speedA);
  resulta.textContent = `${timeA} h ${Math.floor((((+value.value)/speedA)- Math.floor((+value.value)/speedA))*60)} m ${Math.floor((((((+value.value)/speedA)- Math.floor((+value.value)/speedA))*60)-(Math.floor((((+value.value)/speedA)- Math.floor((+value.value)/speedA))*60)))*60)} s`
}