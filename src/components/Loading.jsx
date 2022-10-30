import React from "react";
import { ImSpinner8 } from "react-icons/im";
import styled from "styled-components";

const Spinner = styled(ImSpinner8)`
  fill: #fefefe;
  font-size: 28px;
  margin: 0 auto;
  animation: spin 1s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return <Spinner />;
};

export default Loading;
