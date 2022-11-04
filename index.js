function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    renderBooks(json)
    console.log(pagesTotal(json))
     // console.log(json)
  })
}

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
   
    main.append(h2, pisbn, pcharacters)
  });
}


function pagesTotal(books) {
  let sum = 0
  for (let i=0; i<books.length; i++) {
    // let pages = books[i].numberOfPages;
    sum = books[i].numberOfPages + sum
  }
  return sum
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
