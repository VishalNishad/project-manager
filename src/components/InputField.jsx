import React from "react";
import styled from "styled-components";
const InputField = (props) => {
  return <InputFieldContainer {...props} />;
};

export default InputField;

const InputFieldContainer = styled.input`
  outline: none;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 5px 8px;
  border-radius: 4px;
  width: 90%;
  border: 1.5px solid #55949e;
  &:focus {
    box-shadow: 0 0 0px 2px #2d219947;
  }
`;
