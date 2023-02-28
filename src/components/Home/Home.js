import styles from './home.module.css';
import BobaTea from '../../../images/svg/mug-transparent.svg';

const Home = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  // Hero Section
  const Hero = () => {
    const hero = document.createElement('main');
    hero.classList.add(styles.hero);

    // Hero container
    const heroContainer = document.createElement('div');
    heroContainer.classList.add(styles.container);

    // Hero logo
    const heroLogo = document.createElement('img');
    heroLogo.src = BobaTea;
    heroLogo.height = "96";
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
  const HeroSub = () => {};

  // Home Facts
  const HomeFact = () => {};

  // Home Location
  const HomeLocation = () => {};

  // Append sections to wrapper
  wrapper.appendChild(Hero());

  return wrapper;
};

export default Home;
