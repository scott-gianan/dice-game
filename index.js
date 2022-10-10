// alert('hello world');

const getDice = () => Math.round(Math.random()*5 + 1);

const container1 = document.querySelector('.dice-container-player1')
const container2 = document.querySelector('.dice-container-player2')
const button = document.querySelector('.btn');
const result = document.querySelector('.result');

const dice1 = `<div class="dice1"><div class="circle1"></div></div>`;
const dice2 =             `
<div class="dice2">
    <div class="circle2 top-circle2"></div>
    <div class="circle2 bottom-circle2"></div>
</div>
`
const dice3 =             `
<div class="dice3">
    <div class="circle3 top-circle3"></div>
    <div class="circle3 center-circle3"></div>
    <div class="circle3 bottom-circle3"></div>
</div>
`
const dice4 =             `
<div class="dice4">
    <div class="left-circle">
        <div class="circle4"></div>
        <div class="circle4"></div>
    </div>
    <div class="right-circle">
        <div class="circle4"></div>
        <div class="circle4"></div>
    </div>
</div>
`
const dice5 =             `
<div class="dice5">
    <div class="left-circle">
        <div class="circle5"></div>
        <div class="circle5"></div>
    </div>
    <div class="circle5 center-circle5"></div>
    <div class="right-circle">
        <div class="circle5"></div>
        <div class="circle5"></div>
    </div>
</div>
`

const dice6 =         `
<div class="dice6">
    <div class="left-circle">
        <div class="circle6"></div>
        <div class="circle6"></div>
        <div class="circle6"></div>
    </div>
    <div class="right-circle">
        <div class="circle6"></div>
        <div class="circle6"></div>
        <div class="circle6"></div>
    </div>
</div>
`


const playDice = () => {

    let player1Result = getDice();
    let player2Result = getDice();

    switch (player1Result){
        case 1 : 
            container1.innerHTML = dice1
            break;
        case 2 : 
            container1.innerHTML = dice2
            break;
        case 3 : 
            container1.innerHTML = dice3
            break;
        case 4 : 
            container1.innerHTML = dice4
            break;
        case 5 : 
            container1.innerHTML = dice5
            break;
        default:
            container1.innerHTML = dice6
            break;
    }

    switch (player2Result){
        case 1 : 
            container2.innerHTML = dice1
            break;
        case 2 : 
            container2.innerHTML = dice2
            break;
        case 3 : 
            container2.innerHTML = dice3
            break;
        case 4 : 
            container2.innerHTML = dice4
            break;
        case 5 : 
            container2.innerHTML = dice5
            break;
        default:
            container2.innerHTML = dice6
            break;
    }

    if (player1Result > player2Result){
        return result.textContent = `Player 1 wins!`;
        //return 
    } else if (player1Result < player2Result){
        return result.textContent = `Player 2 wins!`;
        //return 
    } else {
        return result.textContent = `Draw`;
        //return 
    }
   
}

button.addEventListener('click', playDice);

