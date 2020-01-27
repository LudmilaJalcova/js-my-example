window.onload = () => {
  const btn = document.getElementsByTagName('button')[0];
  const quote = document.getElementById('title');
  const autor = document.getElementsByTagName('h5')[0];
  btn.addEventListener('click', () => {
    const quotes = window.quotes;
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    autor.textContent = quotes[random].autor;
  });
};
