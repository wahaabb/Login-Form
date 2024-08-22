function login() {
    let email = document.getElementById("mail").value
    let pw = document.getElementById("pw").value
    if(email == "" || pw == ""){ 
    document.getElementById("btn1").style.display = "none"
    document.getElementById("btn2").style.display = "block"
}else{
    alert("Hogya Login, Jaa Aish Karr!!")
}
}
function log1() {
    let email = document.getElementById("mail").value
    let pw = document.getElementById("pw").value
    if(email == "" || pw == ""){ 
    document.getElementById("btn2").style.display = "none"
    document.getElementById("btn3").style.display = "block"
}}
function log2() {
    let email = document.getElementById("mail").value
    let pw = document.getElementById("pw").value
    if(email == "" || pw == ""){ 
    document.getElementById("btn3").style.display = "none"
    document.getElementById("btn1").style.display = "block"
}}