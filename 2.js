const userName = prompt("Как тебя зовут дружок-пирожок?");

function greeting(value) {
    return console.log(`Здраствуй ${value}! Рад видеть тебя!`);
}

greeting(userName);