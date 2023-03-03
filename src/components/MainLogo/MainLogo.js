import styles from './mainlogo.module.css';
import MugSvg from '../../../images/svg/mug-transparent.svg';
import Home from '../Home/Home';

const MainLogo = () => {
  const nav = document.querySelector('.YzUFKWXwzBzalDos9V6Q');

  if (nav.childNodes[0].classList.contains('E6d6y00estgZubRNwG77')) {
    return;
  } else {
    const homeLogoContainer = document.createElement('div');
    homeLogoContainer.classList.add(styles.home);
    homeLogoContainer.classList.add(styles['nav-item']);
    homeLogoContainer.classList.add('E6d6y00estgZubRNwG77');

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

export default MainLogo;
