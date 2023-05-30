
class BookList {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    const booklist = JSON.parse(localStorage.getItem('array')) || [];
    const Title = this.title;
    const Author = this.author;
    if ((Title.length !== 0) && (Author.length !== 0)) {
      booklist.push(this);
      localStorage.setItem('array', JSON.stringify(booklist));
      this.display();
    }
  }

  display() {
    const booklist = JSON.parse(localStorage.getItem('array')) || [];
    const output = document.querySelector('#output');
    const div = document.createElement('div');
    div.classList.add('div');
    div.innerHTML = `<div class="paradiv"><p>"${this.title}" by "${this.author}"</p></div><div class="buttondiv"><button id="button">Remove</button></div>`;

    output.appendChild(div);

    for (let i = 0; i < booklist.length; i += 1) {
      const button = document.querySelectorAll('#button');
      button[i].addEventListener('click', BookList.remove);
    }
    const change = document.querySelectorAll('.div');
    for (let i = 0; i < booklist.length; i += 1) {
      if (i % 2 === 0) {
        change[i].classList.add('background');
      }
  }
}

  static remove() {
  const booklist = JSON.parse(localStorage.getItem('array')) || [];
  const parent = document.querySelector('#output');
  const button = document.querySelectorAll('#button');
  const removeBTN = Array.from(button).indexOf(this);
  const RemoveDesire = this.parentNode.parentNode;
  parent.removeChild(RemoveDesire);
  booklist.splice(removeBTN, 1);
  localStorage.setItem('array', JSON.stringify(booklist));
  }

  static render() {
    const booklist = JSON.parse(localStorage.getItem('array')) || [];
    const output = document.querySelector('#output');

    for (let i = 0; i < booklist.length; i += 1) {
      const div = document.createElement('div');
      div.classList.add('div');
      div.innerHTML = `<div class="paradiv"><p>"${booklist[i].title}" by "${booklist[i].author}"</p></div><div class="buttondiv"><button id="button">Remove</button></div>`;
      output.appendChild(div);
      const button = document.querySelectorAll('#button');
      button[i].addEventListener('click', BookList.remove);
    }
    const change = document.querySelectorAll('.div');
    for (let i = 0; i < booklist.length; i += 1) {
      if (i % 2 === 0) {
        change[i].classList.add('background');
      }
  }
  }
}

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

function newBook() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const books = new BookList(title.value, author.value);
  books.add();
  title.value = '';
  author.value = '';
}

BookList.render();
document.querySelector('.add').addEventListener('click', newBook);