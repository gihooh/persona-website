import React from 'react';
import MyLogo from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.container}>
    <MyLogo className={styles.logo} width={20} height={20} />
    <nav className={styles.wrapper}>
      <ul className={styles.links}>
        <li>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        {/* <li>
          <Link to="/aboutme">
            <p>About Me</p>
          </Link>
        </li> */}
        <li>
          <Link to="/resume">
            <p>Resume</p>
          </Link>
        </li>
        {/* <li>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </li> */}
      </ul>
    </nav>
  </header>
);

export default Header;
