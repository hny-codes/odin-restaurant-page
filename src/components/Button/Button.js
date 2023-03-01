import styles from './button.module.css';

const Button = (text) => {
  const button = document.createElement('button');
  button.classList.add(styles.btn);
  button.textContent = text;

  return button;
};

export default Button;
