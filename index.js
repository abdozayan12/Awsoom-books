const arr = JSON.parse(localStorage.getItem('formData')) || [];

const form = document.querySelector('#form');
const add = document.getElementById('addBtn');
const title = document.getElementById('title');
const author = document.getElementById('author');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

add.addEventListener('click', () => {
  const formData = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
  };
  arr.push(formData)

  localStorage.setItem('formData', JSON.stringify(arr));
});

function display() {
  const output = document.querySelector('#output');
  let data = '';
    for(let i = 0; i <= arr.length - 1; i += 1) {   
     data += `<div>
        <h2>${arr[i].title}</h2> by <h2>${arr[i].author}</h2>
        
        <button id="removeBtn">remove</button></div>
        `;
    }
    output.innerHTML = data;
}

add.addEventListener('click', display);

display();