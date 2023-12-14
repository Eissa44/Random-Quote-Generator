var quotes = [
  {
    quote:
      "Don't pity the dead, pity the living and above all those who lifes without love",
    author: "— Albus Dumbledore",
  },
  {
    quote:
      "Working hardis importatnt but there is nothing that matters even more; believing in yourself",
    author: "— Harry Potter",
  },
  {
    quote: "“Creativity is not a talent. It is a way of operating.”",
    author: "— John Cleese",
  },
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "― Dr. Seuss",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever”",
    author: "― Albert Einstein",
  },
  {
    quote:
      "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
  },
  {
    quote: "“It does not do to dwell on dreams and forget to live.”",
    author: "― J.K. Rowling, Harry Potter and the Sorcerer's Stone",
  },
];

function generateQuotes() {
  let numRound = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote-par").innerHTML = quotes[numRound].quote;
  document.getElementById("quote-author").innerHTML = quotes[numRound].author;
}
