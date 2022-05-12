import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import styles from './header.module.css';
import SearchBar from '../SearchBar/searchBar';

function Header() {
    return <header className={`${styles.header} container`}>
        <SearchBar/>
    </header>;
}

export default Header;