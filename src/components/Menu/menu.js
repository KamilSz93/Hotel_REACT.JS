import React from 'react'
import styles from './menu.module.css'
import useAuth from '../../hooks/useAuth';

function Menu() {

   // const auth = useContext(AuthContext);
  const [auth, setAuth] = useAuth();

    const login = (e) => {
        e.preventDefault();
       // auth.login(); 
      setAuth(true)
    }

    const logout = (e) => {
      e.preventDefault();
     // auth.logout();
      setAuth(false)
    };

    return (
      <div className={`${styles.menuContainer} breadcrumb`}>
        <ul className={styles.menu}>
          <li className={styles.menuItems}>
            <a href="#">Home </a>
          </li>
          {auth ? (
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