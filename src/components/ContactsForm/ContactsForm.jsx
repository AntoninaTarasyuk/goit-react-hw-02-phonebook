import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import styled from "@emotion/styled";
import { Box } from "../box";
import {Btn} from "../Button/Button"

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
`
const ErrorStyled = styled(ErrorMessage)`
  color: ${p => p.theme.colors.redAccent};
`
const Input = styled(Field)`
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.none};
  outline: none;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 300ms linear;

:hover,
:focus{
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
`

const schema = yup.object().shape({
  name: yup.string().matches("[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$", { message: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" }).required(),
  // number: yup.string().phone().required(), // пропускає лише Українські номери (+380)
  number: yup.string().required(),
});

export const ContactsForm = ({ handleFormSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        handleFormSubmit(values);
        resetForm();
      }}
    >
      <FormStyled>
        <Box as="label" display="flex" flexDirection="column">
          Name
          <Input type="text" name="name" placeholder="Enter name"/>
          <ErrorStyled name="name" component="p" />
        </Box>
        <Box as="label" display="flex" flexDirection="column">
          Number
          <Input
            type="tel"
            name="number"
            placeholder="Enter number like +38011 111 11 11"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorStyled name="number" component="p" />
        </Box>
        <Btn type="submit" name="addContact">
          Add contact
        </Btn>
      </FormStyled>
    </Formik>
  );
};

ContactsForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};