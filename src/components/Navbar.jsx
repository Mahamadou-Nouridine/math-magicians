/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

const NavBar = () => (
  <>
    <nav>
      <div className={styles.container}>
        <h1>Math Magicians</h1>

        <ul className={styles['menu-list']}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default NavBar;
