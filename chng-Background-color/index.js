function func(){
    clr = document.getElementById("inp").value
    document.getElementById("main").style.backgroundColor = clr
}

function func2(){
    document.getElementsByClassName("nav-spn2")[0].style.backgroundColor = "rgb(58, 56, 56)"
    document.getElementsByClassName("nav-spn1")[0].style.backgroundColor =  "black"
    document.getElementsByTagName("label")[0].innerHTML = "Enter a hex: "
    clr = document.getElementById("inp").value
    document.getElementById("main").style.backgroundColor = clr
}

function func3(){
    document.getElementsByClassName("nav-spn1")[0].style.backgroundColor = "rgb(58, 56, 56)"
    document.getElementsByClassName("nav-spn2")[0].style.backgroundColor =  "black"
    document.getElementsByTagName("label")[0].innerHTML = "Enter a color: "
    clr = document.getElementById("inp").value
    document.getElementById("main").style.backgroundColor = clr
}