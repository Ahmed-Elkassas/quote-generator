const apiURL = 'https://type.fit/api/quotes';

const quoteContainer = document.querySelector("#quote__container")
const quoteText = document.querySelector('.quote--content__text');
const quoteAuthor = document.querySelector('.quote--author h5');
const loadingSpinner = document.querySelector("#loading__spinner")

let quotesData = [];

function showLoadingSpinner() {
    loadingSpinner.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    if(!loadingSpinner.hidden) {
        loadingSpinner.hidden = true;
        quoteContainer.hidden = false;
    }
}

function getNewQuote() {
    showLoadingSpinner()
    const quote = quotesData[Math.floor(Math.random() * quotesData.length)];
    if(quote.text.length > 50) {
        quoteText.classList.add("quote--content__long")
    } else {
        quoteText.classList.remove('quote--content__long')
    }
    if(!quote.author) {
        quoteAuthor.textContent = "Unknown"
    } else {
        quoteAuthor.textContent = quote.author
    }
    quoteText.textContent = quote.text;
    removeLoadingSpinner()
}

async function fetchQuotes() {
    showLoadingSpinner()
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