
const Elements = (id) => document.getElementById(id);

const openMenu = () => {
  Elements('navigation-toggle').style.visibility = 'visible';
}

const closeMenu = () => {
  Elements('navigation-toggle').style.visibility = 'hidden';

}



const makeRed = () => {
  document.body.style.backgroundColor = '#fc0606';
}
const makeGreen = () => {
  document.body.style.backgroundColor = '#14ee14';
}
const makeBlue = () => {
  document.body.style.backgroundColor = '#000fe6';
}
const makeYellow = () => {
  document.body.style.backgroundColor = '#ffe600';
}
const makeOrange = () => {
  document.body.style.backgroundColor = '#f35d07';
}

const addClickToElement = (id, click, func) => {
  Elements("nav-menu").addEventListener("click", openMenu);
}

Elements("nav-menu")
  .addEventListener("click", openMenu);
Elements('nav-toggle-red')
  .addEventListener('click', makeRed);
Elements('nav-toggle-green')
  .addEventListener('click', makeGreen);
Elements('nav-toggle-blue')
  .addEventListener('click', makeBlue);
Elements('nav-toggle-yellow')
  .addEventListener('click', makeYellow);
Elements('nav-toggle-orange')
  .addEventListener('click', makeOrange);

const removeClickFromElement = (id, click, func) => {
  Elements("navigation-toggle").addEventlistener('click', closeMenu);
}
Elements("navigation-toggle")
  .addEventListener("click", closeMenu); 
