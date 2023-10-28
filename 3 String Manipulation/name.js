function photoName() {
    const name = prompt('Please enter your name: ');
    name.trim().toLowerCase;
    // const newName = name.split(' ').join('_') + '.jpg';
    const newName = name.replace(' ', '_');
    alert('Your new photo name is ' + newName);
}

photoName();
