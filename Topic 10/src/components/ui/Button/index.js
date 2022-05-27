import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  // PROPS VARIANT
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  // PROPS sm
  ${(props) =>
    props.sm &&
    css`
      font-size: 0.8rem;
      padding: 0.2rem 0.5rem;
    `};
  ${(props) =>
    props.md &&
    css`
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `};
  ${(props) =>
    props.lg &&
    css`
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
    `};
`;

export default Button;