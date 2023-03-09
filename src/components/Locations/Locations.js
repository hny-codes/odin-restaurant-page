import styles from './locations.module.css';

import PageHero from '../PageHero/PageHero';
import siteImage from '../../../images/site/location-1.jpg';

import Observer from '../../IntersectionObserver/IntersectionObserver';

const Locations = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const Hero = () => {
    const heroText = 'Locations';
    return PageHero(siteImage, heroText);
  };

  const LocationItem = (title, text) => {
    const item = document.createElement('div');
    item.classList.add(styles.location);

    // Location elements
    const locationName = document.createElement('h3');
    const locationStreet = document.createElement('p');
    const locationCityStateZip = document.createElement('p');
    const locationNumber = document.createElement('p');
    const locationAvailability = document.createElement('p');

    // Location details
    locationName.textContent = title;
    locationStreet.textContent = text;
    locationCityStateZip.textContent = `City, State, 90000`;
    locationNumber.textContent = `CALL OR TEXT: (123) 456-7890`;
    locationAvailability.textContent = `OPEN 7 DAYS A WEEK | 8:00AM - 10:00 PM`;

    item.append(
      locationName,
      locationStreet,
      locationCityStateZip,
      locationNumber,
      locationAvailability
    );
    Observer('show-subheader', item);
    return item;
  };

  const LocationBody = () => {
    const bodyLocation = document.createElement('div');
    bodyLocation.classList.add(styles['body-container']);

    const bodyTitle = document.createElement('h2');
    bodyTitle.textContent = "Come say hello! We won't bite!";
    Observer('show-subheader', bodyTitle);
    bodyLocation.appendChild(bodyTitle);

    // Location elements
    bodyLocation.append(
      LocationItem('Location 1', '1234 Example St'),
      LocationItem('Location 2', '4321 Example St')
    );
    return bodyLocation;
  };

  wrapper.appendChild(Hero());
  wrapper.appendChild(LocationBody());
  return wrapper;
};

export default Locations;
