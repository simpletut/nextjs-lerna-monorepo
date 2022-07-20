import React from 'react';
import styles from './styles.module.scss';

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} data-testid="footer">
      <div className={styles.wrap}>
        <span>
          COPYRIGHT © {year} SIMPLETUT
        </span>
      </div>
    </footer>
  );
};

export default Footer;
