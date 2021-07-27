const addBtn = document.getElementById('addbtn');
const inputField = document.getElementById('workout');

 
addbtn.addEventListener('click', function() {
	const selectedDay = document.getElementById('selectDay');
	const ul = document.getElementById(selectedDay.value);
	const li = document.createElement('li');
  li.appendChild(document.createTextNode(inputField.value));
  ul.appendChild(li);
  });