let txtInput = document.querySelector("#txt-input");
let btnTranslate = document.querySelector("#btn-translate");
let txtOutput = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click", clickEventHandler);
