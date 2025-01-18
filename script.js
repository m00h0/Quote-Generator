async function getQuote() {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const apiUrl = 'https://zenquotes.io/api/random';
    const url = proxyUrl + encodeURIComponent(apiUrl) + '&' + new Date().getTime();
    try {
        const response = await fetch(url);
        const data = await response.json();
        const contents = JSON.parse(data.contents);
        const quote = contents[0].q;
        const author = contents[0].a;
        const theQuote = document.getElementById('quote');
        if (quote === '') {
            theQuote.innerText = 'unknown';
        }
        else {
        theQuote.innerText = quote;
        }
        const theAuthor = document.getElementById('author');
        if (author === '') {
            theAuthor.innerText = 'unknown';
        }
        else {
        theAuthor.innerText = '- ' + author;
        }
        } 
    catch (error) {
        getQuote();
    }
}

getQuote();