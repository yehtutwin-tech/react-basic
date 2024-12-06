import PropTypes from 'prop-types';
// import './Button.css';
import styles from './Button.module.css';

function Button({ children = 'Button' }) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
}

// Button.defaultProps = {
//   children: PropTypes.node,
// }

export default Button;
