const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");

function checkBirthDateisLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(let index=0;index<dob.length;index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumber.addEventListener('click', checkBirthDateisLucky)