import styles from './menu.module.css';
import PageHero from '../PageHero/PageHero';

import siteImage from '../../../images/site/cafe-menu.jpg';
import BobaBrown from '../../../images/boba/boba1.png';
import BobaGreen from '../../../images/boba/boba2.png';
import BobaYellow from '../../../images/boba/boba3.png';
import BobaRed from '../../../images/boba/boba4.png';

import Observer from '../../IntersectionObserver/IntersectionObserver';

const Menu = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const Hero = () => {
    const heroText = 'Menu';
    return PageHero(siteImage, heroText);
  };

  const MenuItem = (image, text, subtext) => {
    const item = document.createElement('div');
    const span = document.createElement('span');
    item.classList.add(styles.item);

    const bobaImageContainer = document.createElement('div');
    bobaImageContainer.classList.add(styles['boba-container']);
    bobaImageContainer.appendChild(span);

    const bobaImage = document.createElement('img');
    bobaImage.classList.add(styles.boba);
    bobaImage.src = image;
    bobaImageContainer.appendChild(bobaImage);
    Observer(styles['slide-down'], bobaImage);

    const bobaText = document.createElement('h3');
    bobaText.textContent = text;

    const bobaSubText = document.createElement('p');
    bobaSubText.textContent = subtext;

    item.append(bobaImageContainer, bobaText, bobaSubText);
    return item;
  };

  const MenuBody = () => {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add(styles['body-container']);

    const bodyTitle = document.createElement('h2');
    bodyTitle.textContent = 'Boba Tea';
    bodyContainer.appendChild(bodyTitle);

    Observer(styles['slide-down'], bodyTitle);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add(styles['menu-container']);

    // Menu Items
    menuContainer.append(
      MenuItem(BobaGreen, 'Green Tea Delight', 'An earthy pleasant surprise'),
      MenuItem(
        BobaRed,
        'Strawberry Summit',
        'Strawberries and cream? Yes please!'
      ),
      MenuItem(
        BobaYellow,
        'Chocolate Caramel Blast',
        'Choco+Caramel frenzy! Mmmm!'
      ),
      MenuItem(
        BobaBrown,
        'Dark Chocolator',
        'Bitter and sweet, just how you like it'
      )
    );

    bodyContainer.appendChild(menuContainer);
    return bodyContainer;
  };

  setTimeout(() => {
    wrapper.appendChild(Hero());
    wrapper.appendChild(MenuBody());
  }, 1000);
  return wrapper;
};

export default Menu;
