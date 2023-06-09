/* eslint-disable import/no-extraneous-dependencies */
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from './styles/Layout.module.css';

const Layout = () => (
  <>
    <Navbar />
    <div className={styles.container}>
      <Outlet />
    </div>
  </>
);

export default Layout;
