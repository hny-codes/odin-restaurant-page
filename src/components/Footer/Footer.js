import styles from './footer.module.css';

const Footer = () => {
  const footerContainer = document.createElement('footer');
  footerContainer.classList.add(styles.footer);
  const footerCopyrightText = document.createElement('h3');
  const footerAuthor = document.createElement('h3');

  footerCopyrightText.textContent = '©Copyright 2022-2023 All Rights Reserved';
  footerAuthor.textContent = 'Made by hny-codes';

  footerContainer.appendChild(footerCopyrightText);
  footerContainer.appendChild(footerAuthor);

  return footerContainer;
};

export default Footer;
