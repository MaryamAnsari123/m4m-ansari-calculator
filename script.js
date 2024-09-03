function intializeCalculator() {
    var display = document.getElementById("display");
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var value = button.getAttribute("data-value");
            if (value === "=") {
                try {
                    display.value = eval(display.value);
                }
                catch (e) {
                    display.value = "Error";
                }
            }
            else if (value === "C") {
                display.value = "";
            }
            else if (value === "←") {
                display.value = display.value.slice(0, -1);
            }
            else {
                display.value += value;
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", intializeCalculator);
