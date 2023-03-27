// add div
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

// add h1
const headline = document.createElement('h1');
headline.style.color = 'red';
headline.innerText = 'DOM Manipulation';
newDiv.appendChild(headline);

// add p
const newP = document.createElement('p');
newP.innerText = 'The document object represents your web page';
newDiv.appendChild(newP);

// add button
const newButton = document.createElement('button');
newButton.className = 'btn btn-danger';
newButton.textContent = 'Load';
newDiv.appendChild(newButton);

// remove button
// newButton.remove();
// newDiv.removeChild(newButton);

// onclick event
// newButton.onclick = function () {
//   console.log(new Date());
//   console.log('clicked!');
//   let newP = document.createElement('p');
//   newP.innerText = 'The document object represents your web page';
//   newDiv.appendChild(newP);
// };

// add break
newBreak = document.createElement('br');
newDiv.appendChild(newBreak);

// add range
newRange = document.createElement('input');
newRange.type = 'range';
newRange.min = '0';
newRange.max = '100';
newRange.value = '50';
newRange.style.width = '100px';
newDiv.appendChild(newRange);

rangeValue = document.createElement('div');
rangeValue.setAttribute('id', 'range');
newDiv.appendChild(rangeValue);
// console.log(rangeValue.getAttribute('id'));

// add break
newBreak = document.createElement('br');
newDiv.appendChild(newBreak);

// change image onclick
newImage = document.createElement('img');
newDiv.appendChild(newImage);

newButton.onclick = function () {
  let newPumpkin = document.querySelector('img');
  newPumpkin.src = newPumpkin.src.includes('pumpkin2')
    ? 'pumpkin.png'
    : 'pumpkin2.png';
};

newRange.addEventListener('input', function () {
  let newPumpkin = document.querySelector('img');
  newPumpkin.style.width = newRange.value + '%';
  newPumpkin.style.height = newRange.value + '%';

  document.querySelector('#range').innerText = newRange.value;
});

// add form
let form = document.createElement('form');
document.body.appendChild(form);

// add input field
let input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter your first name';
form.appendChild(input);
let input2 = document.createElement('input');
input2.type = 'text';
input2.placeholder = 'Enter your last name';
form.appendChild(input2);

// add submit button
let submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Send';
form.appendChild(submit);

form.addEventListener('submit', function (form) {
  form.preventDefault(); // Prevent refresh, not to lose data
  // console.log('Welcome ' + input.value + ' ' + input2.value);
});

let table = document.createElement('table');
table.className = 'table table-bordered';

form.addEventListener('submit', function (form) {
  form.preventDefault();
  document.body.appendChild(table);
  tr = document.createElement('tr');
  table.appendChild(tr);
  td_firstName = document.createElement('td');
  tr.appendChild(td_firstName);
  td_lastName = document.createElement('td');
  tr.appendChild(td_lastName);
  td_firstName.innerText = input.value;
  td_lastName.innerText = input2.value;
  td_delete = document.createElement('td');
  tr.appendChild(td_delete);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  td_delete.appendChild(deleteButton);
  deleteButton.addEventListener('click', function (event) {
    event.target.parentNode.parentNode.remove();
  });
});

// add clear button
clearTable = document.createElement('button');
clearTable.className = 'btn btn-primary';
clearTable.textContent = 'Clear';
clearTable.addEventListener('click', function (event) {
  document.querySelector('table').innerHTML = '';
});
document.body.appendChild(clearTable);

// add reset button
resetForm = document.createElement('button');
resetForm.className = 'btn btn-primary';
resetForm.textContent = 'Reset';
resetForm.addEventListener('click', function (event) {
  form.reset();
});
document.body.appendChild(resetForm);
