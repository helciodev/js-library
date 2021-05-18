const btnNew = document.querySelector('.btn-new');
const formParent = document.querySelector('.form-parent');
const form = document.getElementById('form');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputRead = document.querySelector('#read');
const booksWrapper = document.querySelector('#books');
const books = [];
let book;

btnNew.addEventListener('click', () => {
  formParent.classList.toggle('hidden');
  form.classList.add('get-down');
});

formParent.addEventListener('click', () => {
  this.classList.toggle('hidden');
  form.classList.toggle('get-down');
});

function MakeBook(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function renderBtnRead(book, ind) {
  if (book) {
    return `<p data-ind="${ind}" class="text-xl cursor-pointer hover:bg-blue-700 p-2" id="toggle-read-yes">Read: ✔</p>`;
  }
  return `<p data-ind="${ind}" class="text-xl cursor-pointer hover:bg-blue-700 p-2" id="toggle-read-no">Read: ❌</p>`;
}

function displayBook(collection) {
  collection.forEach((book, index) => {
    booksWrapper.insertAdjacentHTML('beforeend',
      `<div class="p-5 border border-white bg-blue-400 text-white font-sans rounded-2xl mt-4 mx-3">
           <p class="text-xl">Title: ${book.title} </p>
           <p class="text-xl p-2">Author: ${book.author}</p>
           <p class="text-xl p-2">Pages: ${book.pages}</p>
           ${renderBtnRead(book.read, index)}
           <button data-index="${index}" class="bg-red-500 btn-new text-white mx-auto block px-3 py-2 rounded-lg mt-5" id="delete">delete</button>
         </div>`);
  });
}

function addBookToLibrary(e) {
  e.preventDefault();
  book = new MakeBook(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputRead.checked,
  );

  books.push(book);
  form.reset();
  this.classList.toggle('get-down');
  formParent.classList.toggle('hidden');
  booksWrapper.innerHTML = '';
  displayBook(books);
}

form.addEventListener('submit', addBookToLibrary);

window.addEventListener('click', (e) => {
  if (e.target.id === 'delete') {
    booksWrapper.removeChild(e.target.parentNode);
    books.splice(e.target.attributes[0].value, 1);
  }
});

window.addEventListener('click', (e) => {
  if (e.target.id === 'toggle-read-yes') {
    e.target.innerHTML = `<p data-ind="${e.target.dataset.in}" class="text-xl cursor-pointer hover:bg-blue-700 p-2" id="toggle-read-no">Read: ❌</p>`;
    books[e.target.dataset.ind].read = false;
  } else if (e.target.id === 'toggle-read-no') {
    e.target.innerHTML = `<p data-ind="${e.target.dataset.in}" class="text-xl cursor-pointer hover:bg-blue-700 p-2" id="toggle-read-no">Read: ✔</p>`;
    books[e.target.dataset.ind].read = true;
  }
});