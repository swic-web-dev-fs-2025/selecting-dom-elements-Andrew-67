import "./style.css";

const mainHeader = document.getElementById("main-header");
console.log(mainHeader.textContent);

const links = document.querySelectorAll(".navbar");
console.log(`Number of links in navbar: ${links.length}`);

const internalLinks = document.querySelectorAll('a[href^="/"]');
internalLinks.forEach((link) => {
  link.textContent += " [internal]";
});
console.log(`Number of internal links: ${internalLinks.length}`);