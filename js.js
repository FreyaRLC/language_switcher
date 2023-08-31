"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const locale = "da";

initialize();
function initialize() {
  showLang(locale);
}

document.querySelector("#selectLang").addEventListener("change", updateLang);

function updateLang() {
  let selectedLang = document.querySelector("#selectLang").value;

  showLang(selectedLang);
}

function showLang(lang) {
  if (lang === "da") {
    document.querySelector(texts.da.texts[0].location).textContent =
      texts.da.texts[0].text;
    document.querySelector(texts.da.texts[1].location).textContent =
      texts.da.texts[1].text;
  } else {
    document.querySelector(texts.de.texts[0].location).textContent =
      texts.de.texts[0].text;
    document.querySelector(texts.de.texts[1].location).textContent =
      texts.de.texts[1].text;
  }

  /*
  const languageTexts = lang === "da" ? texts.da.texts : texts.de.texts;

  document.querySelector(languageTexts[0].location).textContent = languageTexts[0].text;
  document.querySelector(languageTexts[1].location).textContent = languageTexts[1].text;
*/
}

// console.log(texts.da.texts[1].text);
