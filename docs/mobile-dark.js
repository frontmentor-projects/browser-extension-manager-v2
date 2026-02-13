'use strict';

//  Define new constants
const toggleButton = document.querySelector('.toggle-button');
const moonImage = document.querySelector('.moon-img');
const sunImage = document.querySelector('.sun-img');
const mainContainer = document.querySelector('.main-container');
const alignButton = document.querySelector('.align-button');
const extensionList = document.querySelector('.extension-list');
const titleContainer = document.querySelector('.title-container');

// Naming functions
const linearGradient = function () {
  return `linear-gradient(180deg, #040918 0%, #091540 100%)`;
};

// Toggle button

let isDark = false;

toggleButton.addEventListener('click', function () {
  isDark = !isDark;

  if (isDark) {
    mainContainer.style.background =
      'linear-gradient(180deg, #040918 0%, #091540 100%)';
    extensionList.style.color = 'white';
    sunImage.style.display = 'block';
    moonImage.style.display = 'none';
  } else {
    mainContainer.style.background = 'white';
    extensionList.style.color = 'black';
    sunImage.style.display = 'none';
    moonImage.style.display = 'block';
  }
});
