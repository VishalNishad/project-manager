import React from "react";
import styled from "styled-components";
const Button = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Button;

const Container = styled.button`
  width: 50%;
  margin: 8px auto;
  display: block;
  font-size: 0.9rem;
  border: 1px solid gainsboro;
  padding: 7px 8px;
  background-color: #2185e6;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: dodgerblue;
  }
`;
