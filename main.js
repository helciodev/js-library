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