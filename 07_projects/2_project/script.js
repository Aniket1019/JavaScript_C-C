const form = document.querySelector('form')
//say you queryed/selected the height here, as soon as the page is loaded the script is running and as soon as the page loads it stores (empty value).... but our usecase is to store and submit some value and then extract them later...... not an empty value 
// we want the values of click the exact instance we click, we want to those values on that specific event

form.addEventListener('submit', function(e){
    e.preventDefault()   //holds whatever the default action is.... it may be (GET, POST)

    const height = parseInt(document.querySelector('#height').value)    //The value recieved here is a string
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>${bmi}</span><br>`;
        if(bmi < 18.6){
            result.innerHTML += `Under Weight = Less than 18.6`
        }else if (bmi >= 18.6 && bmi<=24.9){
            result.innerHTML += `Under Weight = Less than 18.6`
        }else if (bmi > 24.9){
            result.innerHTML+= `Under Weight = Less than 18.6`
        }
    }

})