var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
        if (button.textContent != "=" &&
            button.textContent != "C" &&
            button.textContent != "x" &&
            button.textContent != "÷" &&
            button.textContent != "√" &&
            button.textContent != "x ²" &&
            button.textContent != "%" &&
            button.textContent != "<=" &&
            button.textContent != "±" &&
            button.textContent != "sin" &&
            button.textContent != "cos" &&
            button.textContent != "tan" &&
            button.textContent != "log" &&
            button.textContent != "ln" &&
            button.textContent != "x^" &&
            button.textContent != "x !" &&
            button.textContent != "π" &&
            button.textContent != "e" &&
            button.textContent != "rad" &&
            button.textContent != "∘") {
            display.value += button.textContent;
        } else {
            switch (button.textContent) {
                case '=':
                    if ((display.value).indexOf("^") > -1) {
                        var base = (display.value).slice(0, (display.value).indexOf("^"));
                        var exponent = (display.value).slice((display.value).indexOf("^") + 1);
                        display.value = eval("Math.pow(" + base + "," + exponent + ")");
                    } else {
                        display.value = eval(display.value)
                        checkLength()
                        syntaxError()
                    }
                    break;

                case 'C':
                    display.value = "";
                    break;

                case 'x':
                    display.value += "*";
                    break;

                case '÷':
                    display.value += "/";
                    break;

                case '+':
                    display.value += "+";
                    break;

                case '-':
                    display.value += "-";
                    break;

                case '<=':
                    display.value = display.value.substring(0, display.value.length - 1);
                    break;

                case '%':
                    display.value = display.value / 100;
                    break;

                case 'π':
                    display.value = (display.value * Math.PI);
                    break;

                case 'x ²':
                    display.value = eval(display.value * display.value);
                    break;

                case '√':
                    display.value = Math.sqrt(display.value);
                    break;

                case 'sin':
                    display.value = Math.sin(display.value);
                    break;

                case 'cos':
                    display.value = Math.cos(display.value);
                    break;

                case 'tan':
                    display.value = Math.tan(display.value);
                    break;

                case 'log':
                    display.value = Math.log10(display.value);
                    break;

                case 'ln':
                    display.value = Math.log(display.value);
                    break;

                case 'x^':
                    display.value += "^";
                    break;

                case 'x !':
                    var number = 1;
                    if (display.value === 0) {
                        display.value = "1";
                    } else if (display.value < 0) {
                        display.value = "undefined";
                    } else {
                        var number = 1;
                        for (var i = display.value; i > 0; i--) {
                            number *= i;
                        }
                        display.value = number;
                    }
                    break;

                case 'e':
                    display.value = Math.exp(display.value);
                    break;

                case 'rad':
                    display.value = display.value * (Math.PI / 180);
                    break;

                case '∘':
                    display.value = display.value * (180 / Math.PI);
                    break

                case 'x<sup>3 ':
                    display.value = eval(display.value * display.value * display.value);
                    break;

                default:
                    if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
                        display.value == "Syntax Error";
                    }
                    break;
            }
        }
    });
});