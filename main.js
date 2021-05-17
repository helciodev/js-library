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