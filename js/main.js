Element.prototype.setAttributes = function (attrs) {
  for (var idx in attrs) {
    if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
      for (var prop in attrs[idx]) { this.style[prop] = attrs[idx][prop]; }
    } else if (idx === 'html') {
      this.innerHTML = attrs[idx];
    } else {
      this.setAttribute(idx, attrs[idx]);
    }
  }
};



function stringToDOM(str) {
  const parser = new DOMParser();
  const nodeElement = parser.parseFromString(str, "text/html");
  const element = nodeElement.getRootNode();
  return element.body;
}

const breadcrumb = document.getElementById('breadcrumb');
// const navLinks = document.querySelectorAll('.nav-link');
{/* <li class="breadcrumb-item"><a href="index.html">Home</a></li> */ }
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.href);
// console.log(location.pathname);


// navLinks.forEach((nl, nli)=>{
//   nl.addEventListener('click', e=>{
//     console.log(breadcrumb.childNodes);
//   });
// });
const newPath = location.pathname.toString().match(/\w+(?=\.html)/)[0];
if (newPath !== "home") {
  const newLI = document.createElement('li');
  newLI.setAttributes({ 'class': "breadcrumb-item" });
  const link = document.createElement('a');
  link.setAttributes({ 'href': newPath+'.html' });
  link.textContent = newPath;
  newLI.appendChild(link);
  breadcrumb.appendChild(newLI);
};
