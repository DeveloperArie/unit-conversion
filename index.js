/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const volumeAnswer = document.getElementById("answers-volume")
const lengthAnswer = document.getElementById("answers-length")
const massAnswer = document.getElementById("answers-mass")
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
convertBtn.addEventListener("click", function() {
    lengthCalculation()
    volumeCalculation()
    massCalculation()
})

function lengthCalculation(){
    let unitFeet = ''
    let unitMeter = ''
    unitFeet = inputEl.value * 3.281
    unitMeter = inputEl.value / 3.281
    lengthAnswer.innerHTML = `<p>
     ${inputEl.value} meters = ${unitFeet.toFixed(3)} feet |
     ${inputEl.value} feet = ${unitMeter.toFixed(3)} meters
    </p>`
}
function volumeCalculation(){
    let unitLiter = ''
    let unitGallon = ''
    unitLiter = inputEl.value * 0.264
    unitGallon = inputEl.value / 0.264
    volumeAnswer.innerHTML = `<p>
     ${inputEl.value} liters = ${unitLiter.toFixed(3)} gallons |
     ${inputEl.value} gallons = ${unitGallon.toFixed(3)} liters
    </p>`
}
function massCalculation(){
    let unitKilogram = ''
    let unitPound = ''
    unitKilogram = inputEl.value * 2.204
    unitPound = inputEl.value / 2.204
    massAnswer.innerHTML = `<p>
     ${inputEl.value} kilograms = ${unitKilogram.toFixed(3)} pounds |
     ${inputEl.value} pounds = ${unitPound.toFixed(3)} kilograms
    </p>`
}
