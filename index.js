// const arr = JSON.parse(localStorage.getItem('formData')) || [];

// const add = document.getElementById('addBtn');

// add.addEventListener('click', () => {
//   const formData = {
//     title: document.getElementById('title').value,
//     author: document.getElementById('author').value,
//   };
//   arr.push(formData);

//   localStorage.setItem('formData', JSON.stringify(arr));
// });

// function remove() {
//   const parent = document.querySelector('#output');
//   const button = document.querySelectorAll('#removeBtn');
//   const removeBTN = Array.from(button).indexOf(this);
//   const RemoveDesire = this.parentNode;
//   parent.removeChild(RemoveDesire);
//   arr.splice(removeBTN, 1);
//   localStorage.setItem('formData', JSON.stringify(arr));
// }

// function display() {
//   const output = document.querySelector('#output');
//   let data = '';
//   for (let i = 0; i <= arr.length - 1; i += 1) {
//     data += `<div>
//         <h2>${arr[i].title}</h2> by <h2>${arr[i].author}</h2>

//         <button id="removeBtn">remove</button></div>
//         `;
//   }
//   output.innerHTML = data;
//   for (let i = 0; i < arr.length; i += 1) {
//     const button = document.querySelectorAll('#removeBtn');
//     button[i].addEventListener('click', remove);
//   }
// }

// add.addEventListener('click', display);

// display();

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
    div.innerHTML = `
           <h2>${this.title}</h2> by <h2>${this.author}</h2>

          <button id="removeBtn">remove</button>
             `;

    output.appendChild(div);

    for (let i = 0; i < booklist.length; i += 1) {
      const button = document.querySelectorAll('#removeBtn');
      button[i].addEventListener('click', BookList.remove);
    }
  }

  static remove() {

  }

  static render() {
    const booklist = JSON.parse(localStorage.getItem('array')) || [];
    const output = document.querySelector('#output');
    let data = '';
    for (let i = 0; i <= booklist.length - 1; i += 1) {
      data += `<div>
           <h2>${booklist[i].title}</h2> by <h2>${booklist[i].author}</h2>
  
           <button id="removeBtn">remove</button></div>
           `;
    }
    output.innerHTML = data;

    for (let i = 0; i < booklist.length; i += 1) {
      const button = document.querySelectorAll('#removeBtn');
      button[i].addEventListener('click', BookList.remove);
    }
  }
}

// function render() {
//   const booklist = JSON.parse(localStorage.getItem('array')) || [];
//   const output = document.querySelector('#output');
//   let data = '';
//   for (let i = 0; i <= booklist.length - 1; i += 1) {
//     data += `<div>
//          <h2>${booklist[i].title}</h2> by <h2>${booklist[i].author}</h2>

//          <button id="removeBtn">remove</button></div>
//          `;
//   }
//   output.innerHTML = data;

//   for (let i = 0; i < booklist.length; i += 1) {
//     const button = document.querySelectorAll('#removeBtn');
//     button[i].addEventListener('click', BookList.remove);
//   }
// }

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