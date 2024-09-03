
function intializeCalculator() {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");
            if (value === "="){
                try {
                    display.value = eval(display.value);
                }
                catch (e) {
                    display.value = "Error"
                }
            }
            else if (value === "C") { 
                display.value = "" ;
            }
            else if (value === "←") {
               display.value.slice(0, -1)
            }
            else {
                display.value += value
            }
        })
    });
}

document.addEventListener("DOMContentLoaded" , intializeCalculator)


