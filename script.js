async function getQuote() {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const apiUrl = 'https://zenquotes.io/api/random';
    const url = proxyUrl + encodeURIComponent(apiUrl) + '&' + new Date().getTime();
    try {
        const response = await fetch(url);
        const data = await response.json();
        const contents = JSON.parse(data.contents);
        console.log(contents);
        const quote = contents[0].q;
        const author = contents[0].a;
        const theQuote = document.getElementById('quote');
        theQuote.innerHTML = quote;
        const theAuthor = document.getElementById('author');
        theAuthor.innerHTML = '- ' + author;
    } catch (error) {
        getQuote();
        console.log('Whoops, no quote', error);
    }
}

getQuote();