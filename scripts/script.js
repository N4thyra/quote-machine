$(() => {

const url = 'https://random-quote-generator.herokuapp.com/api/quotes/random';
const urlTwitter = 'https://twitter.com/intent/tweet?text=';
const click = $('#next-quote');
const tweetMe = $('#tweet');
let author = '';
let quote = '';

  function genQuote() {
    $.ajax({
        url,
        type: 'GET',
        success: data => {
          author = '- ' + data.author;
          quote = data.quote;

          if (!quote) {
            console.log('generating new data');
            genQuote();
          } else {
            $('#text').html(quote);
            $('#author').html(author);
          }
        }
    });
  }

  genQuote();

  click.on('click', () => genQuote());

  tweetMe.on('click', () => window.open(urlTwitter + encodeURIComponent(quote + ' ' + author)));

});
