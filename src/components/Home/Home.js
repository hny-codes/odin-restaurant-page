import styles from './home.module.css';
import '../../styles.css';
import MugSvg from '../../../images/svg/mug-transparent.svg';
import BobaBrown from '../../../images/boba/boba1.png';
import BobaGreen from '../../../images/boba/boba2.png';

const Home = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  // Hero Section
  const Hero = () => {
    const hero = document.createElement('main');
    hero.classList.add(styles.hero);

    // Hero container
    const heroContainer = document.createElement('div');
    heroContainer.classList.add(styles['hero-container']);

    // Hero logo
    const heroLogo = document.createElement('img');
    heroLogo.src = MugSvg;
    heroLogo.height = '96';
    heroContainer.appendChild(heroLogo);

    // Hero text
    const heroText = document.createElement('h1');
    heroText.textContent = 'Tip Top Cafe';
    heroContainer.appendChild(heroText);

    hero.appendChild(heroContainer);

    // Hero Button
    const heroBtn = document.createElement('button');
    heroBtn.classList.add(styles.btn);
    heroBtn.textContent = 'Take a look!';
    hero.appendChild(heroBtn);

    return hero;
  };

  // Hero Subsection
  const HeroSub = () => {
    // Sub section container - grid
    const subContainer = document.createElement('div');
    subContainer.classList.add(styles['sub-container']);

    // Left Image section
    const subImageLeftContainer = document.createElement('div');
    subImageLeftContainer.classList.add(styles['left-image']);
    const subImageLeft = document.createElement('img');
    subImageLeft.src = BobaBrown;
    subImageLeftContainer.appendChild(subImageLeft);

    // Center section - Text section
    const subTextContainer = document.createElement('div');
    subTextContainer.classList.add(styles['sub-text'])
    const subTextHeader = document.createElement('h2');
    const subTextSubheader = document.createElement('p');
    const subTextBtn = document.createElement('button');

    subTextHeader.textContent = 'Love Boba? We do too!';
    subTextSubheader.textContent =
      'Tons of selections and toppings to customize from!';
    subTextBtn.textContent = 'See more';

    subTextContainer.appendChild(subTextHeader);
    subTextContainer.appendChild(subTextSubheader);
    subTextContainer.appendChild(subTextBtn);

    // Right Image section
    const subImageRightContainer = document.createElement('div');
    subImageRightContainer.classList.add(styles['right-image']);
    const subImageRight = document.createElement('img');
    subImageRight.src = BobaGreen;
    subImageRightContainer.appendChild(subImageRight);

    subContainer.appendChild(subImageLeftContainer);
    subContainer.appendChild(subTextContainer);
    subContainer.appendChild(subImageRightContainer);

    return subContainer;

  };

  // Home Facts
  const HomeFact = () => {};

  // Home Location
  const HomeLocation = () => {};

  // Append sections to wrapper
  wrapper.appendChild(Hero());
  wrapper.appendChild(HeroSub());

  return wrapper;
};

export default Home;
