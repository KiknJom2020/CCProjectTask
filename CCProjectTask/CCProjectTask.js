function randomChoice() {
    return Math.floor(Math.random() * 6);
}

const messagesArray = {
    astroSign : ['leo', 'pisces', 'balance', 'taurus', 'gemini', 'virgo'],
    astroMessage : ['Today will be a lucky day', 'You will meet Love today', 'Be careful with your boss', 'You have a secret Lover', 'Check your health', 'Money will come to you', 'Beware if you take your care today'],
}

function futureTelling () {
    const sign = messagesArray.astroSign[randomChoice()];
    const message = messagesArray.astroMessage[randomChoice()];
    return `You are ruled by the ${sign}. ${message}`;
}

console.log(futureTelling());

