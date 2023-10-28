// Step 1: Select all checkbox inputs in the document
const checkbox = document.querySelectorAll("input[type='checkbox']");

console.log(checkbox);
// Step 2: Loop through each checkbox
for (const item of checkbox) {
    // Step 3: Add an event listener for the 'focus' event to each checkbox
    item.addEventListener('focus', (e) => {
        const check = e.target;
        check.className = 'focus';
        check.parentNode.className = 'focus';
    });
    // Step 3.1: When a checkbox gains focus,
    //add the 'focus' class to the checkbox
    // Step 3.2: Also add the 'focus' class to the parent label element
    item.addEventListener('blur', (e) => {
        e.target.className = '';
        e.target.parentNode.className = '';
    });
}

// Step 4: Add an event listener for the 'blur' event to each checkbox
// Step 4.1: When a checkbox loses focus, remove the 'focus' class
// Step 4.2: Also remove the 'focus' class from the parent label element
