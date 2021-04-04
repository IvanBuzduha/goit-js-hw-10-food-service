import menuTemplate from '../templates/template.hbs';

import menuDataJson from '../menu.json';

const menuFood = menuTemplate(menuDataJson);


const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', menuFood)