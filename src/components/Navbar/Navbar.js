import styles from './navbar.module.css';
import coffeeIcon from '../../../images/svg/coffee.svg';
import MugSvg from '../../../images/svg/mug-transparent.svg';

import Menu from '../Menu/Menu';
import Home from '../Home/Home';

const Navbar = () => {
  // Add wrapper class
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  // Nav bar
  const nav = document.createElement('nav');
  nav.classList.add(styles['nav-bar']);

  wrapper.appendChild(nav);

  // Nav links

  // Menu
  const menu = document.createElement('div');
  menu.classList.add(styles['nav-item']);
  const menuText = document.createElement('h3');

  const menuSvg = document.createElement('img');
  menuSvg.src = coffeeIcon;
  menu.appendChild(menuSvg);

  menuText.textContent = 'Menu';
  menu.appendChild(menuText);

  nav.appendChild(menu);

  // Location
  const location = document.createElement('div');
  location.classList.add(styles['nav-item']);
  const locationText = document.createElement('h3');

  const locationSvg = document.createElement('img');
  locationSvg.src = coffeeIcon;
  location.appendChild(locationSvg);

  locationText.textContent = 'Locations';
  location.appendChild(locationText);

  nav.appendChild(location);

  // About
  const about = document.createElement('div');
  about.classList.add(styles['nav-item']);
  const aboutText = document.createElement('h3');

  const aboutSvg = document.createElement('img');
  aboutSvg.src = coffeeIcon;
  about.appendChild(aboutSvg);

  aboutText.textContent = 'About';
  about.appendChild(aboutText);

  nav.appendChild(about);

  // Click listener for nav items
  handleClick(nav);

  return wrapper;
};

const addHomeLogo = (nav) => {
  // Check if nav has the home nav item - do nothing if true
  if(nav.childNodes[0].classList.contains('E6d6y00estgZubRNwG77')){
    return;
  }else {
    // Create the home nav item 
    const homeLogoContainer = document.createElement('div');
    homeLogoContainer.classList.add(styles['nav-item']);
    homeLogoContainer.classList.add(styles['home-item']);

    const homeLogo = document.createElement('img');
    homeLogo.src = MugSvg;
    homeLogo.height = 32;
    homeLogoContainer.appendChild(homeLogo);

    const homeText = document.createElement('h1');
    homeText.textContent = 'Tip Top Cafe';
    homeLogoContainer.appendChild(homeText);

    // Add event listener to remove itself and redirect back to home page
    homeLogoContainer.addEventListener('click', () => {
      nav.removeChild(nav.childNodes[0]);
        const content = document.getElementById('content');
        const mainContent = content.childNodes[1];
        mainContent.parentNode.replaceChild(Home(), mainContent);
    });

    nav.prepend(homeLogoContainer);
  }
};


const handleClick = (nav) => {
  const content = document.getElementById('content');

  nav.childNodes.forEach((listItem) => {
    listItem.addEventListener('click', () => {
      // console.log(listItem.textContent);
      const mainContent = content.childNodes[1];

      if (listItem.textContent === 'Menu') {
        mainContent.parentNode.replaceChild(Menu(), mainContent);
        addHomeLogo(nav);
      }
    });
  });
};

export default Navbar;
