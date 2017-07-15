$(() => {

const url = 'https://random-quote-generator.herokuapp.com/api/quotes/random';
const click = $('#next-quote');
let author = '';
let quote = '';

function genQuote() {
  $.ajax({
      type: 'GET',
      url,
      success: data => {
        author = '- ' + data.author;
        quote = data.quote;

        if (!quote) {
          console.log('generating new data');
          genQuote();
        }
        $('#text').html(quote);
        $('#author').html(author);
      }
  });
}

  click.on('click', () => {
    genQuote();
  });
});
