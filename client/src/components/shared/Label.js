import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: inline-block;
  text-align: center;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  ${props => props.customStyles}
`;

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

export default Label;
