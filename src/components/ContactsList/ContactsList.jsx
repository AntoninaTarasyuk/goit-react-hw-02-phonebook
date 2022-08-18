import PropTypes from 'prop-types';
import { Box } from "../box";
import { ContactsItem } from '../ContactsItem/ContactsItem';


export const ContactsList = ({ contacts, filter, deleteContact }) => {
  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap={4}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
          return (
            <li key={contact.id}>
              <ContactsItem contact={contact} deleteContact={deleteContact}/>
            </li>
          );
        })}
    </Box>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};