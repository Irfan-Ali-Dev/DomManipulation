// Solution # 1
const txtChg = document.querySelector("#message");
txtChg.innerHTML= "Welcome!";

// Solution # 2
const input = document.querySelector("#nameInput");
const result = document.querySelector("#result")

function getVal(){console.log(input.value);
    result.innerHTML = input.value
}

// Solution # 3
const container = document.querySelector("#container");
function cghClr(color){console.log(color);
    container.style.backgroundColor = color
}

// Solution # 4
const mainTitle = document.querySelector("#mainTitle")
mainTitle.style.color = "red"

// Solution # 5
const num = document.querySelector("#num1");
const output = document.querySelector("#output")
function getNum(){console.log(num.value);
    output.innerHTML = "Total Numbers: " + num1.value
}

// Solution # 6
const submitBtn = document.querySelector(".submit-btn")
function log(){
    console.log("Button Clicked");
}

// Solution # 7
const num1 = document.querySelector("#first")
const num2 = document.querySelector("#second")
const sum = document.querySelector("#sum")
function getSum() {
    sum.innerHTML =Number(num1.value) + Number (num2.value)
    return "You Type Nothing"
}

// Solution # 8
const chgtxt = document.querySelector(".description"); 
    chgtxt.innerHTML = "Updated successfully";

// Solution # 9
const box = document.querySelector("#box")
box.style.backgroundColor = "green"
box.style.width = "200px"
box.style.height = "50px"

// Solution # 10
const email = document.querySelector("#email") 
function showEmail(){
    console.log(email.value);
}

// Solution # 11
const para = document.querySelector("#para")
    para.style.fontSize = "24px"

// Solution # 12
const fullName = document.querySelector("#fullName");
const greeting = document.querySelector("#greeting");
function getfullName(){
    greeting.style.textDecoration = "underline";
    greeting.innerHTML = "Hello " + fullName.value;
}

// Solution # 13
const profilePic = document.querySelector("#profilePic")
profilePic.src = "https://harkness-roses.s3.amazonaws.com/700/530665.jpg"
// profilePic.style.width = "100px"

// Solution # 14
const txtColor = document.querySelectorAll(".highlight");
txtColor.forEach(elmts => elmts.style.color = "orange");
    
// Solution # 15
const chkbox = document.querySelector("#agree")
const display = document.querySelector("#display")
function checkAgreement () {
    if (chkbox.checked) {
        display.innerHTML = "Agreed"
    }else {
        display.innerHTML = "Not Agreed"
    }
}
// Solution # 16
const fruit = document.querySelector ("#options")
const seldFruit = document.querySelector ("#selectedValue")
function showFruit () {
    seldFruit.innerHTML = "Your Selected Fruit is " + fruit.value;
}
// Solution # 17
const dateTime = document.querySelector("#dateTime")
function displayTime (){
    const now = new Date();
    dateTime.innerHTML = now.toLocaleString()  
}
// Solution # 18
const hide = document.querySelector("#togglePara");
    hide.style.display = "none";

// Solution # 19
function checkResult() {
    const ageInput = document.querySelector("#age")
    const showResult = document.querySelector("#showResult")
        const age = Number(ageInput.value)
    if (age >= 18 && age <= 60) {
        console.log("Eligible");
        showResult.innerHTML = "Eligible"
        }else {console.log("Not Eligible");
        showResult.innerHTML = "Not Eligible"
    }
}

// Solution # 20
const searchBox = document.querySelector("#searchBox")
const clearBtn = document.querySelector("#clearBtn");
    function clear() {
        searchBox.value = "";
        }
