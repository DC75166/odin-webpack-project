import './style.css';
import createHome from './Home';
import createMenu from './menu';
import createContact from './Contact';
import backgroundImage from './background.jpg'

function loadPage(contentCreator) {
  const contentDiv = document.querySelector('#content');
  contentDiv.textContent = '';
  contentDiv.appendChild(contentCreator());
}

function setActiveButton(button) {
  document.querySelectorAll('nav button').forEach((button) => {
    button.classList.remove('active');
  });
  button.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';

  const homeBtn = document.querySelector('.home');
  const menuBtn = document.querySelector('.menu');
  const contactBtn = document.querySelector('.contact');

  homeBtn.addEventListener('click', () => {
    loadPage(createHome);
    setActiveButton(homeBtn);
  });

  menuBtn.addEventListener('click', () => {
    loadPage(createMenu);
    setActiveButton(menuBtn);
  })

  contactBtn.addEventListener('click', () => {
    loadPage(createContact);
    setActiveButton(contactBtn);
  })

  loadPage(createHome);

});
