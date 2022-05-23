import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import styles from './header.module.css';
import widthMousePosition from '../../hoc/withMousePosition';

function Header(props) {
    return (
      <header className={`${styles.header} container position-relative`}>
        <div className='text-light'>
          {props.mouseX}<br></br>
          {props.mouseY}
        </div>

        {props.children}
      </header>
    );
}

export default widthMousePosition(Header);