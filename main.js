const secondHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();


    const secondDegree = ((seconds / 60)*360)+90;
    const minDegree = ((mins/60)*360)+90;
    const hourDegree = ((hours/60)*360)+90;

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform= `rotate(${hourDegree}deg)`;
}

setInterval(setDate,1000);