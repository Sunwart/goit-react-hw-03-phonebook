import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';

const ContactList = ({ visibleNumbers, onDeleteContact }) => {
  return (
    <ul>
      {visibleNumbers.map(({ id, name, number }) => (
        <Contact
          name={name}
          number={number}
          contactId={id}
          key={id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  visibleNumbers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
