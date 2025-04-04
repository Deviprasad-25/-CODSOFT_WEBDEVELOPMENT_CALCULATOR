let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let currentInput = "";

let buttonArray = Array.from(buttons);

buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML; 

        switch (buttonValue) {
            case '=':
                try {
                    currentInput = eval(currentInput);
                    input.value = currentInput;
                } catch (error) {
                    input.value = "Error";
                    currentInput = ""; 
                }
                break;

            case 'AC':
                currentInput = "";
                input.value = currentInput;
                break;

            case 'DEL':
                currentInput = currentInput.slice(0, -1);
                input.value = currentInput;
                break;

            default:
                currentInput += buttonValue;
                input.value = currentInput;
                break;
        }
    });
});