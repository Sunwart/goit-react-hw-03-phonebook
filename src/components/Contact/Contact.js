import PropTypes from 'prop-types';

const Contact = ({ name, number, contactId, onDeleteContact }) => {
  return (
    <li>
      <button type="button" onClick={() => onDeleteContact(contactId)}>
        x
      </button>
      {name}: {number}
    </li>
  );
};

Contact.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
