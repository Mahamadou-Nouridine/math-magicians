import Calculator from '../components/calculator';
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
