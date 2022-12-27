import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      <ul className={style.list}>
        {Object.keys(options).map(option => {
          return (
            <li key={option}>
              <button
                className={style[option]}
                onClick={() => onLeaveFeedback([option])}
                type="button"
              >
                {[option]}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
