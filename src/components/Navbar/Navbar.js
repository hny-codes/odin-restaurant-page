import styles from './navbar.module.css';
import coffeeIcon from '../../../images/svg/coffee.svg';

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

  return wrapper;
};

export default Navbar;
