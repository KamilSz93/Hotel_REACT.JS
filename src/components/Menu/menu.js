import React, { useContext } from 'react'
import styles from './menu.module.css'
import AuthContext from '../../context/authContext';

function Menu() {

    const auth = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        auth.login(); 
    }

    const logout = (e) => {
      e.preventDefault();
      auth.logout();
    };

    return (
      <div className={`${styles.menuContainer} breadcrumb`}>
        <ul className={styles.menu}>
          <li className={styles.menuItems}>
            <a href="#">Home </a>
          </li>
          {auth.isAuthenticated ? (
            <li className={styles.menuItems}>
              <a href="#" onClick={logout}>Wyloguj</a>
            </li>
                ) : (
            <li className={styles.menuItems}>     
              <a href="#" onClick={login}>Zaloguj</a>
            </li>
          )}
        </ul>
      </div>
    );
}

export default Menu;