const inputExtractor = (element) => element.querySelectorAll('input');
const tabsCheckboxes = inputExtractor(document);

tabsCheckboxes.forEach(box => box.addEventListener('change', function() {
    let checkboxWrapper = this.closest('li.interest');
    for (child of checkboxWrapper.children) {
        if (child.nodeName === 'UL') {
            let childCheckboxes = inputExtractor(child);
            this.checked === true ? childCheckboxes.forEach(element => element.checked = true) : childCheckboxes.forEach(element => element.checked = false);
        }
    }
}));