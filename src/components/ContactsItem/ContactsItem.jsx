import PropTypes from 'prop-types';
import { Box } from "../box";
import { Btn } from "../Button/Button"
import styled from "@emotion/styled";

const Contact = styled.p`
  display: flex;
  flex-direction: column;
`

export const ContactsItem = ({ contact, deleteContact }) => {
  return (
    <Box as="div" display="flex" justifyContent="space-between" alignItems="center">
      <Contact><span>{contact.name}:</span><span>{contact.number}</span></Contact>
      <Btn
        name="deleteBtn"
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </Btn>
    </Box>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};