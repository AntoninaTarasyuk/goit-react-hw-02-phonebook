import PropTypes from 'prop-types';
import { Box } from "../box";
import { STitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box as="section" width="100vw" p={5}>
      <STitle>{title}</STitle>
      {children}
    </Box>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section;