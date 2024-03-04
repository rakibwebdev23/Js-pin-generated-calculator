function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}


document.getElementById('btn-generate').addEventListener('click', function(event){
    const pin = getPin();
    const displayPinField = document.getElementById('pin-field');
    displayPinField.value = pin;
})
// number calculator section

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-field');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;  
        }
    }
    else{
        
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click', function(){
    const displayPinField = document.getElementById('pin-field');
    const currentPinField = displayPinField.value;
    const typeNumberField = document.getElementById('type-field');
    const curretNumberField = typeNumberField.value;
    const pinSucess = document.getElementById('sucess-message');
    const pinNotSucess = document.getElementById('failur-message');
    if(currentPinField === curretNumberField){
        pinSucess.style.display = 'block';
        pinNotSucess.style.display = 'none';
    }
    else{
        pinNotSucess.style.display = 'block';
        pinSucess.style.display = 'none';
    }

})