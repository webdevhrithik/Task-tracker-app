import PropTypes from 'prop-types';

export default function Button({ color, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: 'stealblue',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
