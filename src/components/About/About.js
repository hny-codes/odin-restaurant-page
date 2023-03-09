import styles from './about.module.css';

import PageHero from '../PageHero/PageHero';
import siteImage from '../../../images/site/boba.jpg';

import Observer from '../../IntersectionObserver/IntersectionObserver';

const About = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const Hero = () => {
    const heroText = 'About Us';
    return PageHero(siteImage, heroText);
  };

  const AboutItem = (title, text) => {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add(styles.about);
    const aboutItemTitle = document.createElement('h3');
    const aboutItemBody = document.createElement('p');

    aboutItemTitle.textContent = title;
    aboutItemBody.textContent = text;

    aboutContainer.append(aboutItemTitle, aboutItemBody);
    Observer('show-subheader', aboutContainer);
    return aboutContainer;
  };

  const AboutBody = () => {
    const bodyAbout = document.createElement('div');
    bodyAbout.classList.add(styles['body-container']);

    const bodyTitle = document.createElement('h2');
    bodyTitle.textContent = 'Learn More About Us!';
    Observer('show-subheader', bodyTitle);
    bodyAbout.appendChild(bodyTitle);

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add(styles['about-container']);
    aboutContainer.append(
      AboutItem(
        'Our Goal',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis. Neque laoreet suspendisse interdum consectetur libero id faucibus. Scelerisque fermentum dui faucibus in. Diam ut venenatis tellus in metus.'
      ),
      AboutItem(
        'Our Goal',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis. Neque laoreet suspendisse interdum consectetur libero id faucibus. Scelerisque fermentum dui faucibus in. Diam ut venenatis tellus in metus.'
      )
    );

    bodyAbout.appendChild(aboutContainer);

    return bodyAbout;
  };

  wrapper.appendChild(Hero());
  wrapper.appendChild(AboutBody());
  return wrapper;
};

export default About;
