import React, { ReactNode } from 'react';
import Footer from './../../organisms/Footer';
import Header from './../../organisms/Header';
import styles from './styles.module.scss';

export interface PropTypes {
  children?: ReactNode
}

const MasterTemplate = ({
  ...otherProps
}: PropTypes): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.main} data-testid="masterTemplate">
        {otherProps.children}
      </main>
      <Footer />
    </>
  );
};

export default MasterTemplate;
