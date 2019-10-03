const newItem = document.getElementById('item');
const itemList = document.querySelector('#itemList');
const plus = document.querySelector('.fa-plus');

const addItem = (e) => {

	if (e.keyCode === 13 && newItem.value !== null && newItem.value !== undefined && newItem.value.trim() !== "") {
		// The trim() method removes whitespace from both sides of a string 

		// Crete new li element
		const li = document.createElement('li');

		// Create 'trash' span
		const spanElementTrash = document.createElement('span');
		// Add classes to span
		spanElementTrash.className = 'deleting';
		// Append span to li
		li.appendChild(spanElementTrash);

		// Create 'trash' icon
		const trashIcon = document.createElement('i');
		trashIcon.className = 'fa fa-trash-alt delete';
		spanElementTrash.appendChild(trashIcon);

		// Add text node with input value and uppercase first letter of input
		const newItemValue = newItem.value;
		const textNode = document.createTextNode(newItemValue.charAt(0).toUpperCase() + newItemValue.slice(1));
		textNode.toString().replace(/(\r\n|\n|\r)/gm, " ");
		li.appendChild(textNode);

		// Create 'check' span
		const spanElementChecking = document.createElement('span');
		spanElementChecking.className = 'checking';
		li.appendChild(spanElementChecking);

		// Create 'check' icon 
		const checkIcon = document.createElement('i');
		checkIcon.className = 'far fa-check-circle check-circle';
		spanElementChecking.appendChild(checkIcon);

		// Append li to list
		itemList.appendChild(li);
		// Set next input to empty value
		newItem.value = '';
	};
}

const strikeThrough = (e) => {
	if (e.target.classList.contains('check-circle')) {
		e.target.parentElement.parentElement.classList.toggle('completed');
		e.target.classList.toggle('checked');
	}
}

const removeItem = (e) => {
	if (e.target.classList.contains('delete')) {
		const itemElement = e.target.parentElement.parentElement;
		itemList.removeChild(itemElement);
	};
}

const displayInput = (e) => {	
	newItem.classList.toggle('input');
	newItem.classList.toggle('toggle-input');
	plus.classList.toggle('fa-plus-stop-pulsing')
}

plus.addEventListener('click', displayInput);
newItem.addEventListener('keyup', addItem);
itemList.addEventListener('click', strikeThrough);
itemList.addEventListener('click', removeItem);
