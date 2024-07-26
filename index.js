const answers=["official","solidify","insatiable","wicked","sensational","satire","cognizant","sheer","exonorate"];
let answerPicker=Math.floor(Math.random()*answers.length);
const answer=answers[answerPicker].toUpperCase();
const buttonHolder=document.getElementById("keys");
const navCaser=document.getElementById("holders");
const hangman=document.querySelectorAll(".hangman");
const vicStat=document.getElementById("vicStat");


let array=answer.split('');//shuffling the word
for(let i=array.length-1;i>0;i--){
    let j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
}
array.join('');

let key;
let keyElements=[];

for(let i=0;i<array.length;i++){
    key=document.createElement("button");
    key.classList.add("key");
    key.textContent=array[i];
    buttonHolder.appendChild(key);
    keyElements.push(key);
}

let navElements=[]
for(let i=0;i<array.length;i++){
    let nav=document.createElement("nav");
    nav.classList.add("nav");
    navCaser.appendChild(nav);
    navElements.push(nav);
}
function running(){
let index=0;
keyElements.forEach(key=>{
    key.addEventListener("mousedown",event=>{
        navElements[index].textContent=event.target.textContent;
        navElements[index].style.backgroundColor="transparent";
        index++;
        if(index==navElements.length){
            victoryStatus();
        }
    }) 
})}
running();
let j=1;
function victoryStatus(){
    let win=true;
    let answerArray=answer.split('');
    for(let i=0;i<navElements.length;i++){
        if(navElements[i].textContent!==answerArray[i]){
            win=false;
            break;
        }}
        if(win){
           vicStat.textContent="You guessed it";
           vicStat.style.display="block";
           setTimeout(()=>{
            location.reload();
           },800);
        }
        else{
            navElements.forEach(nav=>{
                nav.textContent="";
            })
            hangman[j].style.opacity=1;
            j++;
            if(j===8){
                vicStat.textContent="You are out of guesses😟";
                vicStat.style.display="block";
                setTimeout(()=>{
                    location.reload();
                },1000);
            }
            running();
        }
    
}



