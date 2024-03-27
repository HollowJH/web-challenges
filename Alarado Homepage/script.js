var theme = document.getElementById("theme")
var body = document.getElementsByTagName("body")[0]
var logo = document.getElementsByClassName("logo")[0]
var sun = document.getElementsByClassName("sun")[0]
var moon = document.getElementsByClassName("moon")[0]
var main = document.getElementsByClassName("main")[0]
var h1 = document.getElementsByTagName("h1")[0]
var h3 = document.getElementsByTagName("h3")[0]
var a = document.getElementsByTagName("a")

theme.addEventListener("change", function(){
    console.log(a)
    if (this.checked) {
        logo.src = "resources/alarado-icon-homepage-light.svg"
        sun.src = "resources/Sun_fill_light.svg"
        moon.src = "resources/Moon_fill.svg"
        h1.style.color = "white"
        h3.style.color = "white"
        body.style.backgroundColor = "#111729"
        a[0].style.color = "#f1f9fc"
    } else {
        logo.src = "resources/alarado-icon-homepage.svg"
        sun.src = "resources/Sun_fill.svg"
        moon.src = "resources/Moon_fill_light.svg"
        h1.style.color = "black"
        h3.style.color = "black"
        body.style.backgroundColor = "#F2F9FE"
        a[0].style.color = "#283949"
    }
})