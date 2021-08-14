let quotes = [];
const quoteContainer = document.getElementById("quotebox");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteButton  = document.getElementById("new-quote");
const twitterButton = document.getElementById("twitter");
const loader = document.getElementById("loader");

//to show loader 
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide loading
function LoadCompleted() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}


//get quotes from API using asynchronous function
async function getQuotes(){
    loading();
    //build an api url
    const apiurl = "https://type.fit/api/quotes";
    //
    try {
        const response = await fetch(apiurl);
        quotes = await response.json();
        singleQuote();
    } catch (error) {
        alert(error);
    }
}
    function singleQuote() {
        loading();
        if(quotes.length){
            //to get the one random quote
            let singlequote = quotes[Math.floor(Math.random()*quotes.length)]
            //check if author field is null then assign as "Anonymous"
            if(!singlequote.author){
                quoteAuthor.textContent  = "- Anonymous";
            }else{
                quoteAuthor.textContent = singlequote.author;
            }  
            if (singlequote.text.length >120) {
                quoteText.classList.add('long-quote');
            } else {
                quoteText.classList.remove('long-quote');
            }
            //assigning it to the respective element in the HTML
            quoteText.textContent  = singlequote.text;
            LoadCompleted();        
        }
    }
//To build the new quote URL
    function tweetQuote(){
        const tweetURL  = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
        window.open(tweetURL,`_blank`);
    }

    //twitter and new Quote button event listerners
    newQuoteButton.addEventListener('click',singleQuote);
    twitterButton.addEventListener('click',tweetQuote);

//onload 
getQuotes(); 