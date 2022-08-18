import styled from "@emotion/styled";

const Button = styled.button`
  min-width: 70px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => {
  return p.name==="deleteBtn"
    ? p.theme.colors.redAccent
    : p.theme.colors.primary
  }};
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  transition: box-shadow 300ms linear;
`;

export const Btn = ({ type = "button", children, name, onClick }) => {
  return <Button type={type} name={name} onClick={onClick}>{children}</Button>;
};
