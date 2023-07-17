const confirmButton = document.getElementById("confirmButton");
const formField = document.querySelector(".form_container");
const thankYouMessage = document.querySelector(".thank_message");


const cardNameHolder = document.querySelector("#name");
const cardNumber = document.querySelector("#cardNumber");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const number = document.querySelector("#number");
const GrayCardValue = document.querySelector("#blackGrayCardValue");


cardNameHolder.addEventListener("input", getName);
cardNumber.addEventListener("input", getCardNumber);
number.addEventListener("input", getCvcNumber);


const error = document.querySelector(".error");
const monthError = document.querySelector(".error2");
const yearError = document.querySelector(".error3");
const numberError = document.querySelector(".error4");

let myName;
let myCardNumber;
let cvcNumber;
let validMonth;
let validYear;

function getName() {
    let verifiedCardHolderName = cardNameHolder.value;
    let myName = verifiedCardHolderName.replace(/[^a-zA-Z]+/g, ' ').trim();
    cardNameHolder.value = myName;
    console.log(cardNameHolder);
}

function getCardNumber() {
    let verifiedCardHolderNumber = cardNumber.value;
    myCardNumber = verifiedCardHolderNumber.replace(/[^0-9]/g, '');
    if (verifiedCardHolderNumber !== myCardNumber) {
        error.innerHTML = "Wrong format, numbers only"
    } else {
        cardNumber.value = myCardNumber;
        error.innerHTML = ""
        if ((cardNumber.value).length < 15) {
            error.innerHTML = "16 digits number is required"
        } else {
            error.innerHTML = "";
            return true;
        }
    }
}

function validateYearAndMonth() {
    validYear = year.value;
    validMonth = month.value;
    const yearRegex = /^(19|20)\d{2}$/;
    const monthRegex = /^(0[1-9]|1[0-2])$/;
    if (!validMonth && validYear === "") {
        monthError.innerHTML = "Can't be blank";
    } else if (!yearRegex.test(validYear)) {
        monthError.innerHTML = "Invalid year";
    } else if (!monthRegex.test(validMonth)) {
        monthError.innerHTML = "Invalid month";
    } else {
        return true;
    }
    }
/*  */
function getCvcNumber() {
    let verifiedCvcNumber = number.value;

    if (verifiedCvcNumber === "") {
        numberError.innerHTML = "Can't be blank"
    } else {
        numberError.innerHTML = ""
        if (verifiedCvcNumber.length < 3) {

            numberError.innerHTML = "3 digits required"
        } else {
            numberError.innerHTML = ""
            cvcNumber = verifiedCvcNumber.replace(/[^0-9]/g, '');
            if (verifiedCvcNumber !== cvcNumber) {
                numberError.innerHTML = "Numbers only"
            } else {
                numberError.innerHTML = ""
                return true;
            }
        }
    }
}
confirmButton.addEventListener('click', function (event) {

    if ((cardNameHolder.value === "") || (getCardNumber() !== true)) {
    } else {
        if ((validMonth && validYear === "") || (validateYearAndMonth() !== true)) {
        } else {
            error.innerHTML = ""
            if (getCvcNumber() !== true) {
            } else {
                numberError.innerHTML = ""
                function separateNumbers(number) {
                    const numberString = number.toString();
                    const chunks = [];
                    for (let i = numberString.length - 1; i >= 0; i -= 4) {
                        const chunk = numberString.substring(Math.max(i - 3, 0), i + 1);
                        chunks.unshift(chunk);
                    }
                    return chunks.join(' ');
                }
                const cardValue = document.querySelector(".card_value");
                const nameOfCardHolder = document.querySelector("#cardHolderName");
                const monthValue = document.querySelector("#monthValue");
                const yearValue = document.querySelector("#yearValue");
                const ContinueBtn = document.querySelector("#ContinueBtn");
                cardValue.innerHTML = separateNumbers(myCardNumber);
                cardValue.style.paddingTop = '12%';
                nameOfCardHolder.innerHTML = cardNameHolder.value;
                monthValue.innerHTML = month.value;
                yearValue.innerHTML = "/" + year.value;
                GrayCardValue.innerHTML = cvcNumber;
                formField.style.display = "none"
                thankYouMessage.style.display = "flex"
                ContinueBtn.addEventListener("click", function () {
                formField.style.display = "flex"
                thankYouMessage.style.display = "none"
                location.reload();
                })
            }
        }
    }
})

