const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalId

const startChangingColor = function() {
    if(!intervalId){
        intervalId = setInterval(ChangeBgColor, 1000)
    }

    function ChangeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
};

const stopChangingColor = function() {
    clearInterval(intervalId)
    intervalId = null // flushing out the internalId after use that is dereferencing the variable value 
};



document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

