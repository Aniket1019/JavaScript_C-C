const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(buttons);
    button.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target); //tells us exaclty where the event is coming from
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id // or you can add hardcoded value 'grey'
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id 
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id 
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id 
        }

    });
});