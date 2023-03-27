function getMessage() {
    const amount = Math.round(Math.random() * 100000);
    const message = "You won " + amount + " EUR!\n" +
        "To collect your winnings, send your credit card\n" +
        "and bank details to michaela.bacikova@tuke.sk";
    return message;
}

function showWinningsAlert() {
    //showWinningsInDocument();
    alert(getMessage());
}

function showWinningsInDocument() {
    document.write("<h1><blink>" + getMessage() + "</blink></h1>");
}