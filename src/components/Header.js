import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

export default function Header({ title, onAdd, showAdd }) {
  const location = useLocation();

  return (
    <div className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          text={showAdd ? 'Close' : 'Add'}
          color={showAdd ? 'red' : ' green'}
          onClick={onAdd}
        />
      )}
    </div>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
};

// jsx problem may accure
