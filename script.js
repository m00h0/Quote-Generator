const loader = document.getElementById('load');
const quoteContainer = document.getElementById('quote-container');

function showLoader() {
  loader.hidden = false;
quoteContainer.hidden = true;
}

function hideLoader() {
  if (!loader.hidden) {
      loader.hidden = true;
      quoteContainer.hidden = false;
  }
  }

async function getQuote() {
  const proxyUrl = 'https://api.allorigins.win/get?url=';
  const apiUrl = 'https://zenquotes.io/api/random';
  const url = `${proxyUrl + encodeURIComponent(apiUrl)}&${new Date().getTime()}`;
  try {
    showLoader()
    const response = await fetch(url);
    const data = await response.json();
    const contents = JSON.parse(data.contents);
    const quote = contents[0].q;
    const author = contents[0].a;
    const theQuote = document.getElementById('quote');
    if (quote === '') {
      theQuote.innerText = 'unknown';
    } else {
      theQuote.innerText = quote;
      hideLoader();
    }
    const theAuthor = document.getElementById('author');
    if (author === '') {
      theAuthor.innerText = 'unknown';
    } else {
      theAuthor.innerText = `- ${author}`;
    }
  } catch (error) {
    getQuote();
  }
}

function quoteX() {
  const quote = document.getElementById('quote').innerText;
  const author = document.getElementById('author').innerText;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} ${author}`)}`;
  window.open(xUrl, '_blank');
}

const newQuote = document.getElementById('quote-button');
const xQuote = document.getElementById('x');
newQuote.addEventListener('click', getQuote);
xQuote.addEventListener('click', quoteX);

getQuote();