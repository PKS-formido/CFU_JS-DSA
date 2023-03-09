
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;
}

document.getElementById('length').addEventListener('change', charLength)

const result = document.querySelector("#password__result");
const passLength = document.querySelector("#length");
const passLengthresult = document.querySelector("#result");
const check_numbers = document.querySelector("#numbers");
const check_symbols = document.querySelector("#symbols");
const check_uppercase = document.querySelector("#uppercase");
const check_lowercase = document.querySelector("#lowercase");
const generate = document.querySelector("#btn");

document.addEventListener("DOMContentLoaded", () => {
    passLength.value = 20;
    passLengthResult.innerText = 20;
    let onLoadLength = passLength.value;
    let onLoadNumbers = includeNumbers.checked;
    let onLoadSymbols = includeSymbols.checked;
    let onLoadUppercase = includeUppercase.checked;
    let onLoadLowercase = includeLowercase.checked;
    result.value = generatePassword(onLoadNumbers, onLoadSymbols, onLoadUppercase, onLoadLowercase, onLoadLength);
    });

passLength.addEventListener("change", (event) => {
    passLengthResult.innerText = event.target.value;
});

generate.addEventListener('click', () => {
    const length = passLength.value
    const numbers = check_numbers.checked
    const symbols = check_symbols.checked
    const uppercase = check_uppercase.checked
    const lowercase = check_lowercase.checked
    result.value = generatePassword(numbers, symbols, uppercase, lowercase, length)
    })

    function generatePassword(numbers, symbols, uppercase, lowercase, length) {
        let generatedPassword = '';
        
        for(let i = 0; i < length; i ++) {
            if (numbers) {
            generatedPassword += getRandomNumber()
            } 
            if (symbols) {
            generatedPassword += getRandomSymbol()
            }
            if (uppercase) {
            generatedPassword += getRandomUpper()
            }
            if (lowercase) {
            generatedPassword += getRandomLower()
            }
        }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
    }
    function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
