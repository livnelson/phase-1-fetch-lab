function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
    // console.log(json)
}

fetchBooks();

function renderBooks(books) {
  const main = document.querySelector('main');  // identify DOM element
  books.forEach(book => {
    const h2 = document.createElement('h2');  // create element
    h2.innerText = book.name;
    const pisbn = document.createElement('p');
    pisbn.innerText = book.isbn;
    const pcharacters = document.createElement('p');
    pcharacters.innerText = book.characters;
    // const ppages = document.createElement('p');
    // ppages.innerText = book.pages;
   
    main.appendChild(h2, pisbn, pcharacters)
  });
}

// function pagesTotal(books) {
//   for (let i=0; i,books.length; i++) {
//     let pages = books[i].numberOfPages;
//     let sum = books[i].numnberOfPages + books[i++].numberOfPages;
//     return sum()
//   }

// const pages = book.map((book) => book.numberOfPages)

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
