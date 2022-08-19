import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styled from "@emotion/styled";
import { Box } from "../box";

const SearchForm = styled(Form)`
  margin: ${p => p.theme.space[4]}px 0;
`
const Input = styled(Field)`
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  font-size: 16px;
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

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <Formik initialValues={{ filter: filter }}>
      <SearchForm>
        <Box as="label" display="flex" flexDirection="column">
          Find contacts by name
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={e => { handleFilterChange(e.target.value) }}
            placeholder="Search name"
          />
        </Box>
      </SearchForm>
    </Formik>
  )
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};