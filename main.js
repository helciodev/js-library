const btnNew = document.querySelector('.btn-new');
const formParent = document.querySelector('.form-parent');
const form = document.getElementById('form')
let inputTitle = document.querySelector('#title');
let inputAuthor = document.querySelector('#author');
let inputPages = document.querySelector('#pages');
let inputRead = document.querySelector('#read');
const booksWrapper = document.querySelector("#books")
let books = []
let book;
let stored = ''

btnNew.addEventListener('click', function() {
  formParent.classList.toggle('hidden')
  form.classList.add('get-down')
})

formParent.addEventListener('click', function() {
this.classList.toggle('hidden')
form.classList.toggle('get-down')
})

function makeBook(title, author, pages, read = false){
   this.title = title
   this.author = author
   this.pages = pages
   this.read = read
 }

 function addBookToLibrary(e) {

  e.preventDefault()
  book = new makeBook(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputRead.checked
  )

  books.push(book)
   form.reset()
   this.classList.toggle('get-down')
   formParent.classList.toggle('hidden')
   displayBook(book)
  
}

form.addEventListener('submit', addBookToLibrary)

function displayBook(book) {

  booksWrapper.insertAdjacentHTML('beforeend',
        `<div class="p-5 border border-white bg-blue-400 text-white font-sans rounded-2xl mt-4 mx-3">
           <p class="text-xl">Title: ${book.title} </p>
           <p class="text-xl p-2">Author: ${book.author}</p>
           <p class="text-xl p-2">Pages: ${book.pages}</p>
           <p class="text-xl p-2">Read: ${book.read? '✔': '❌'} </p>
           <button data-index="${books.indexOf(book)}" class="bg-red-500 btn-new text-white mx-auto block px-3 py-2 rounded-lg mt-5" id="delete">delete</button>
         </div>`
         ) 
         
}

window.addEventListener('click', function(e) {
  console.log(e.target.attributes[0].value)
  if(e.target.id == 'delete'){
    booksWrapper.removeChild(e.target.parentNode)
    books.splice(e.target.attributes[0].value, 1)
  }
})