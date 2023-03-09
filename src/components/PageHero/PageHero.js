import styles from './pagehero.module.css';
import Observer from '../../IntersectionObserver/IntersectionObserver';

const PageHero = (image, text) => {
  const hero = document.createElement('header');
  hero.classList.add(styles.hero);
  hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`;

  const textContent = document.createElement('h1');
  textContent.textContent = text;
  hero.appendChild(textContent);

  Observer('show-header', textContent);
  return hero;
};

export default PageHero;
