/* document.getElementById('btn').addEventListener('click',randomQuote() );


function randomQuote(){
  

  var Quote = quotes[Math.floor(Math.random()*quotes.length)];

  document.getElementById(Quote).innerHTML=Quote.quote;
  document.getElementById(Author).innerHTML=Quote.author;

  console.log(Quote);
} */

var allQuotes=[];
async function getQuotes(){
 var apiResp= await fetch ('https://type.fit/api/quotes');
 var finalRes= await apiResp.json();
 allQuotes=finalRes;
 console.log(allQuotes);
}
getQuotes();
// var quotes = [
//   {
//     quote: 'You only live once, but if you do it right, once is enough',
//     author: 'Mae West'
//   },
//   {
//     quote: 'Be the change that you wish to see in the world',
//     author: 'Mahatma Gandhi'
//   },
//   {
//     quote: 'In three words I can sum up everything I ve learned about life it goes on',
//     author: 'Robert Frost'
//   },
//   {
//     quote: 'If you tell the truth, you dont have to remember anything.',
//     author: 'Mark Twain'
//   },
//   {
//     quote: 'Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
//     author:  'Maya Angelou'
//   },
// ];


document.getElementById('btn').addEventListener('click',function(){
  let Quote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  document.getElementById('Quote').innerHTML = Quote.text;
  document.getElementById('Author').innerHTML = Quote.author.replace('type.fit','');
 

});

