const btnNew = document.querySelector('.btn-new');
const formParent = document.querySelector('.form-parent');
const form = document.getElementById('form')
let inputTitle = document.querySelector('#title');
let inputAuthor = document.querySelector('#author');
let inputPages = document.querySelector('#pages');
let inputDescription = document.querySelector('#description');
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

function makeBook(title, author, pages, description){
   this.title = title
   this.author = author
   this.pages = pages
   this.description = description
 }

 function addBookToLibrary(e) {
  e.preventDefault()
  book = new makeBook(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputDescription.value
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
           <p class="text-xl">title: ${book.title} </p>
           <p class="text-xl p-2">author: ${book.author}</p>
           <p class="text-xl p-2">pages: ${book.pages}</p>
           <p class="text-xl p-2">description: ${book.description} </p>
           
           <label for="read">have you read it before</label>
           <input type="checkbox" name="read" id="read">
           <button data-index="${books.indexOf(book)}" class="bg-red-500 btn-new text-white mx-auto block px-3 py-2 rounded-lg mt-5" id="delete">delete</button>
         </div>`
         ) 
         
}