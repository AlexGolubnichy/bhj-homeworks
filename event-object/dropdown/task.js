const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

function toggleClassList() {
	dropdownList.classList.toggle("dropdown__list_active");
};

dropdownValue.addEventListener('click', toggleClassList);

function changeValue(event) {
	event.preventDefault();
	let options = event.target;
	dropdownList.classList.remove("dropdown__list_active");
	dropdownValue.textContent = options.textContent;	
};

dropdownItems.forEach(elem => {
	elem.addEventListener('click', changeValue);
});