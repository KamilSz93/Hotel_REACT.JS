import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import styles from './header.module.css';
import SearchBar from '../SearchBar/searchBar';

function Header(props) {
    return <header className={`${styles.header} container`}>
        <SearchBar onSearch={props.onSearch}/>
    </header>;
}

export default Header;