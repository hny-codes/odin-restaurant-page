import styles from './home.module.css';
import '../../styles.css';
import Button from '../Button/Button';
import MugSvg from '../../../images/svg/mug-transparent.svg';
import BobaBrown from '../../../images/boba/boba1.png';
import BobaGreen from '../../../images/boba/boba2.png';
import BobaYellow from '../../../images/boba/boba3.png';
import CreditCard from '../../../images/svg/credit-card.svg';
import Heart from '../../../images/svg/heart.svg';
import GiftBox from '../../../images/svg/gift.svg';
import Menu from '../Menu/Menu';
import Locations from '../Locations/Locations';
import MainLogo from '../MainLogo/MainLogo';
import Observer from '../../IntersectionObserver/IntersectionObserver';

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
    const heroBtn = Button('Take a look!');
    hero.appendChild(heroBtn);

    return hero;
  };

  // Hero Subsection
  const HeroSub = () => {
    // Sub section container - grid
    const subContainer = document.createElement('section');
    subContainer.classList.add(styles['sub-container']);

    // Left Image section
    const subImageLeftContainer = document.createElement('div');
    subImageLeftContainer.classList.add(styles['left-image']);
    const subImageLeft = document.createElement('img');
    subImageLeft.src = BobaBrown;
    subImageLeftContainer.appendChild(subImageLeft);
    Observer(styles['slide-boba-left'], subImageLeft);

    // Center section - Text section
    const subTextContainer = document.createElement('div');
    subTextContainer.classList.add(styles['sub-text']);
    const subTextHeader = document.createElement('h2');
    const subTextSubheader = document.createElement('p');
    const subTextBtn = Button('See more');

    subTextBtn.addEventListener('click', () => {
      const content = document.getElementById('content');
      // Get Nav bar
      const nav = document.querySelector('.YzUFKWXwzBzalDos9V6Q');
      console.log(nav);
      const mainContent = content.childNodes[1];
      mainContent.parentNode.replaceChild(Menu(), mainContent);
      MainLogo();
    });

    subTextHeader.textContent = 'Love Boba? We do too!';
    subTextSubheader.textContent =
      'Tons of selections and toppings to customize from!';

    Observer('show-header', subTextHeader);
    Observer('show-subheader', subTextSubheader);

    subTextContainer.appendChild(subTextHeader);
    subTextContainer.appendChild(subTextSubheader);
    subTextContainer.appendChild(subTextBtn);

    // Right Image section
    const subImageRightContainer = document.createElement('div');
    subImageRightContainer.classList.add(styles['right-image']);
    const subImageRight = document.createElement('img');
    subImageRight.src = BobaGreen;
    subImageRightContainer.appendChild(subImageRight);
    Observer(styles['slide-boba-right'], subImageRight);

    subContainer.appendChild(subImageLeftContainer);
    subContainer.appendChild(subTextContainer);
    subContainer.appendChild(subImageRightContainer);

    return subContainer;
  };

  // Home Facts
  const HomeFact = () => {
    const factSection = document.createElement('section');
    factSection.classList.add(styles['fact-container']);

    // Image section
    const factImageLeft = document.createElement('img');
    factImageLeft.classList.add(styles['fact-img']);
    factImageLeft.src = BobaYellow;

    Observer(styles['slide-boba-info'], factImageLeft);
    factSection.appendChild(factImageLeft);

    // Fact section
    const infoContainer = document.createElement('div');
    infoContainer.classList.add(styles['info-container']);

    // Fact 1
    const freshInfoContainer = document.createElement('div');
    freshInfoContainer.classList.add(styles.info);
    const freshInfo = document.createElement('h3');
    freshInfo.textContent = 'Fresh ingredients';
    const freshIcon = document.createElement('img');
    freshIcon.src = Heart;
    freshInfoContainer.appendChild(freshIcon);
    freshInfoContainer.appendChild(freshInfo);

    // Fact 2
    const giftInfoContainer = document.createElement('div');
    giftInfoContainer.classList.add(styles.info);
    const giftInfo = document.createElement('h3');
    giftInfo.textContent = 'Buy 2 - Gift 1 free';
    const giftIcon = document.createElement('img');
    giftIcon.src = GiftBox;
    giftInfoContainer.appendChild(giftIcon);
    giftInfoContainer.appendChild(giftInfo);

    // Fact 3
    const cardInfoContainer = document.createElement('div');
    cardInfoContainer.classList.add(styles.info);
    const cardInfo = document.createElement('h3');
    cardInfo.textContent = 'We accept all currencies!';
    const cardIcon = document.createElement('img');
    cardIcon.src = CreditCard;
    cardInfoContainer.appendChild(cardIcon);
    cardInfoContainer.appendChild(cardInfo);

    Observer('show-text', freshInfo);
    Observer('show-text', giftInfo);
    Observer('show-text', cardInfo);

    infoContainer.appendChild(freshInfoContainer);
    infoContainer.appendChild(giftInfoContainer);
    infoContainer.appendChild(cardInfoContainer);

    factSection.appendChild(infoContainer);

    return factSection;
  };

  // Home Location
  const HomeLocation = () => {
    const locationSection = document.createElement('section');
    locationSection.classList.add(styles['location-section']);

    const locationContainer = document.createElement('div');
    locationContainer.classList.add(styles['location-container']);
    const locationText = document.createElement('h2');
    const locationSubtext = document.createElement('h2');
    const locationBtn = Button('Locations');

    locationBtn.addEventListener('click', () => {
      const content = document.getElementById('content');
      // Get Nav bar
      const nav = document.querySelector('.YzUFKWXwzBzalDos9V6Q');
      console.log(nav);
      const mainContent = content.childNodes[1];
      mainContent.parentNode.replaceChild(Locations(), mainContent);
      MainLogo();
    });

    locationText.textContent = "We'd love to see you here,";
    locationSubtext.textContent = 'Boba-enthusiasts!';

    locationContainer.appendChild(locationText);
    locationContainer.appendChild(locationSubtext);
    locationContainer.appendChild(locationBtn);

    locationSection.appendChild(locationContainer);

    return locationSection;
  };

  // Append sections to wrapper
  wrapper.appendChild(Hero());
  wrapper.appendChild(HeroSub());
  wrapper.appendChild(HomeFact());
  wrapper.appendChild(HomeLocation());

  return wrapper;
};

export default Home;
