const form = document.querySelector('#form');
const add = document.getElementById('addBtn');
const title = document.getElementById('title');
const author = document.getElementById('author');

form.addEventListener('add', (e) => {
  e.preventDefault();
});

form.addEventListener('click', () => {
  const formData = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});

function display() {
  if (localStorage.getItem('formData')) {
    const { title, author } = Json.parse(localStorage.getItem('formData'));
    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>${title}</h2> by <h2>${author}</h2>
        
        <button id="removeBtn">remove</button>
        `;
  }
  form.addEventListener('click',  display());
}
