const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");

function compareValues(sum,luckyNumber) {
    if(sum % luckyNumber === 0) {
        console.log("Your birthday is lucky !😍")
    }
    else {
        console.log("Your birthday is not lucky !🤮")
    }
}

function checkBirthDateisLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum,luckyNumber.value);
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