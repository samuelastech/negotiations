const inputs = document.querySelectorAll('[id]');
const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const tr = document.createElement('tr');
  for (const input of inputs) {
    const td = document.createElement('td');
    td.textContent = input.value;
    tr.appendChild(td);
  }
  
  const tdVolume = document.createElement('td');
  tdVolume.textContent = inputs[1].value * inputs[2].value;
  tr.appendChild(tdVolume);
  tbody.appendChild(tr);

  inputs[0].value = '';
  inputs[1].value = 1;
  inputs[2].value = 0;
  inputs[0].focus();
});
