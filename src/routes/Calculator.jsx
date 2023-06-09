/* eslint-disable import/extensions */
import Calculator from '../components/Calculator.jsx';
import styles from './styles/Calculator.module.css';

const CalculatorRoute = () => (
  <>
    <div className={styles.container}>
      <p>Let&apos;s do some math</p>
      <Calculator />
    </div>
  </>
);

export default CalculatorRoute;
