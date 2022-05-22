import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import styles from './header.module.css';

function Header(props) {
    return (
      <header className={`${styles.header} container position-relative`}>
        {props.children}
      </header>
    );
}

export default Header;