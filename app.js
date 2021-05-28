const addNameForm = document.querySelector('form')
const nameInput = document.querySelector('input')
const addFormBtn = document.querySelector('button')
const ul = document.querySelector('ul')

    fetch('https://us-central1-js04-b4877.cloudfunctions.net/tasks') 
        .then(response => response.json())
        .then(data => data.data.forEach((item) => {
            const li = document.createElement('li')
   const checkbox = document.createElement('input')
   li.appendChild(checkbox)
   checkbox.type = 'checkbox';

   checkbox.addEventListener('change', (event) => {
       const parent = event.target.parentNode
       if (event.target.checked) {
            parent.classList.add('box')
       } else {
         parent.classList.remove('box')
       }
   })
   
   const span = document.createElement('span')
   const deleteBtn = document.createElement('button');

   

 ul.appendChild(li)
 li.appendChild(span)
 li.appendChild(deleteBtn)
 deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
       ul.removeChild(li);
})
 
 span.textContent=item.text;
            

        }))


addNameForm .addEventListener('submit', (e) => {
    e.preventDefault();

   const myItem = nameInput.value;

   const li = document.createElement('li')
   const checkbox = document.createElement('input')
   li.appendChild(checkbox)
   checkbox.type = 'checkbox';

   checkbox.addEventListener('change', (event) => {
       const parent = event.target.parentNode
       if (event.target.checked) {
            parent.classList.add('box')
       } else {
         parent.classList.remove('box')
       }
   })
   
   const span = document.createElement('span')
   const deleteBtn = document.createElement('button');

   

 ul.appendChild(li)
 li.appendChild(span)
 li.appendChild(deleteBtn)
 deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
       ul.removeChild(li);
})
 
 span.textContent=myItem;

 nameInput.value = '';
 nameInput.focus();

})
