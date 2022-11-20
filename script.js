const apiURL = 'https://type.fit/api/quotes';

let quotesData = []

function getNewQuote() {
    const quote = quotesData[Math.floor(Math.random() * quotesData.length)];
    console.log(quote)
}

async function fetchQuotes() {
    try {    
        const response = await fetch(apiURL);
        quotesData = await response.json();
        getNewQuote()
     } catch (error) {
        alert(error)
     }
}

// For initial loading
fetchQuotes()