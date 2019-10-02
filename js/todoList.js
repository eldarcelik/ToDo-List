const newItem = document.getElementById('item');
const itemList = document.querySelector('#itemList');
const plus = document.querySelector('.fa-plus');

const addItem = (e) => {

	if (e.keyCode === 13 && newItem.value !== null && newItem.value !== undefined && newItem.value.trim() !== "") {
		// The trim() method removes whitespace from both sides of a string 

		// Crete new li element
		const li = document.createElement('li');

		// Create span
		const spanElement = document.createElement('span');
		// Add classes to span
		spanElement.className = 'delete';
		// Append span to li
		li.appendChild(spanElement);

		// Create icon
		const iconElement = document.createElement('i');
		// Add classes to icon
		iconElement.className = 'fa fa-trash-alt delete';
		// Append icon to span
		spanElement.appendChild(iconElement);

		// Add text node with input value and uppercase first letter of input
		const newItemValue = newItem.value;
		const textNode = document.createTextNode(newItemValue.charAt(0).toUpperCase() + newItemValue.slice(1));
		// Append text node to li
		li.appendChild(textNode);

		// Append li to list
		itemList.appendChild(li);
		// Set next input to empty value
		newItem.value = '';
	};
}

const strikeThrough = (e) => {
	if (e.target.tagName === 'LI') e.target.classList.toggle('completed');
	// In HTML, the returned value of the tagName property is always in UPPERCASE.
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
