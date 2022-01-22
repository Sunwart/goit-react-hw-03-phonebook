import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = { filter: PropTypes.string, onChange: PropTypes.func.isRequired };

export default Filter;
