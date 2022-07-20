import React from 'react';
import styles from './styles.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header} data-testid="header">
      <div className={styles.wrap}>
        <span className={styles.logo}>
          Logo
        </span>
      </div>
    </header>
  );
};

export default Header;
