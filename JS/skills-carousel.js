const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--fullstack-elements-displayed");
const marqueeContent = document.querySelector("ul.fullstack-content");

root.style.setProperty("--fullstack-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}