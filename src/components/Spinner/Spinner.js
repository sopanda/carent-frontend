import React, { Component } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  height: 100vh;
  background-color: #001220;
  opacity: 0.7;
`;

export default class Spinner extends Component {
  render() {
    return (
      <Wrapper>
        <Loader type="Ball-Triangle" color="#3de6af" height={100} width={100} />
      </Wrapper>
    );
  }
}
