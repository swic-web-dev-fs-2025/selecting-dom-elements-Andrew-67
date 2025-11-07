import "./style.css";

const mainHeader = document.getElementById("main-header");
console.log(mainHeader.textContent);

const links = document.querySelectorAll(".navbar");
console.log(`Number of links in navbar: ${links.length}`);

const internalLinks = Array.from(document.querySelectorAll('a[href^="/"]'));
internalLinks.map((link) => {link.textContent += " [internal]";});
console.log(`Number of internal links (refactored): ${internalLinks.length}`);

const inputsStyles = document.querySelectorAll("input");
inputsStyles.forEach((input) => {input.style.outline = "2px solid gold";});

const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  card.setAttribute("data-viewed", "true");
  console.log(`Card ${index + 1} viewed status: ${card.getAttribute("data-viewed")}`);
});
const productChange = document.querySelector('[data-product-id="2"] .price');
productChange.textContent = "$24.99";
console.log(`Updated price for product 2: ${productChange.textContent}`);

const nullButton = document.querySelector(".missing-button");
if (nullButton) {
  nullButton.addEventListener("click", handleClick);
} else {
  console.log("Button with class 'missing-button' does not exist.");
}
// const title = document.querySelector("main .card .card-title");
// Refractored
// const title = document.querySelector("[data-card-title]");