import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <ul className={style.list}>
        <li>
          <span className={style.text}>Good: {good}</span>
        </li>
        <li>
          <span className={style.text}>Neutral: {neutral}</span>
        </li>
        <li>
          <span className={style.text}>Bad: {bad}</span>
        </li>
      </ul>
      <ul className={style.list}>
        <li>
          <span className={style.text}>Total: {total}</span>
        </li>
        <li>
          <span className={style.text}>
            Positive feedback: {positivePercentage}
          </span>
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
