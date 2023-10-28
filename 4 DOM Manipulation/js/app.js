//1. Target the form element in the DOM.
const form = document.querySelector('form');
console.log(form);
//2. Attach an event listener to the form element to listen for any change events.

form.addEventListener('change', (e) => {
    //3. Inside the event listener:
    //  - Target the checkbox that triggered the change event.
    if (e.target.type === 'checkbox') {
        //  - Get the combat style of the triggering checkbox from its data-combat-style attribute.
        const combat = e.target.dataset.combatStyle;
        //  - Select all checkboxes from the DOM that share the same combat style as the triggering checkbox.
        const allBoxes = document.querySelectorAll(
            `input[data-combat-style=${combat}]`
        );
        //3a. Next, loop over each checkbox with the matching combat style:
        for (const box of allBoxes) {
            //  - If: the checkbox being looped over is NOT the one that triggered the event,
            //    and the triggering checkbox is checked, then:
            //  - Else:
            //    - Do not change its state.
            box.disabled = box !== e.target && e.target.checked;
        }
    }
});
