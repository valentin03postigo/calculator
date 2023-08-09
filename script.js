const numberBtns = document.getElementsByClassName("number")

for (const numberBtn of numberBtns) {
    numberBtn.addEventListener("click", function(){
        
        const screen = document.getElementById("screen")
        screen.innerHTML = numberBtn.textContent;
        console.log("clickeado")
    })
}