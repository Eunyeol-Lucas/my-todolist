const quotes = [
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
    },
    {
        quote: " Do not try do be original, just try to be good.",
        author: "Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the good to go the the great.",
        author: "John D.Rockefeller",
    },
    {
        quote: " All progress takes place outside the comfort zone.",
        author: " Michael John Bobak",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: " Success seems to be connected with action. Successful people keep moving",
        author: "Conrad Hilton",
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis",
    },
    {
        quote: "All we have is now",
        author: "",
    },
    {
        quote: "Let them be them, let us be us",
        author: "",
    },
    {
        quote: "One day or day one. It’s your choice",
        author: "",
    },
]

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `📍 ${todaysQuote.quote}`;
author.innerText = `🔍 ${todaysQuote.author}`;