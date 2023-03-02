/** @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";

import "./App.css";

import logo from '../../assets/logo.svg';
import Button from "../Button";
import { ButtonColor, ButtonVariant } from "shared-styles";

function App() {
  const Kaas = css`
    background-color: red;

    :hover {
      background-color: orange;
    }
  `;

  return (
    <div className="App">
      <header className="App-header" style={{color: "#ffffff"}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div css={Kaas}>This is a darkorchid Kaas.</div>
        <Button color={ButtonColor.PRIMARY} iconAfter="forward3">Button icon right</Button>
        <Button color={ButtonColor.PRIMARY} variant={ButtonVariant.OUTLINE} iconBefore="backward2">Button icon left</Button>
        <Button color={ButtonColor.SECONDARY} iconBefore="backward2">Button icon left</Button>
        <Button color={ButtonColor.SECONDARY} variant={ButtonVariant.OUTLINE} iconBefore="backward2">Button icon left</Button>
        <Button color={ButtonColor.TERTIARY} iconBefore="backward2">Button icon left</Button>
        <Button color={ButtonColor.TERTIARY} variant={ButtonVariant.OUTLINE} iconBefore="backward2">Button icon left</Button>
      </header>
    </div>
  );
}

export default App;
