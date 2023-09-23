
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;
const correctAns = num1 * num2;


const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");


let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`;



formEl.addEventListener("submit", ()=>{
    //!le + converti en type number 
    const answerUser = parseInt(inputEl.value);
    if(answerUser === correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
    inputEl.value = "";
    scoreEl.innerText = `score: ${score}`;

})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));

}






