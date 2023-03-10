/** @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";

import "./App.css";

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
      <header className="App-header">
        <div css={Kaas}>Custom styling</div>
        <div style={{color: "#ffffff", display: "flex", alignItems: "center", flexDirection: "column", flexWrap: "wrap"}}>
          <div>
            To test the "inherit" on the button text color,<br/>
            the style of the parent element is <code>`color: "#ffffff";`</code>
          </div>
          <Button color={ButtonColor.PRIMARY} iconAfter="forward3">Button icon right</Button>
          <Button color={ButtonColor.PRIMARY} variant={ButtonVariant.OUTLINE} iconBefore="backward2">Button icon left</Button>
          <Button color={ButtonColor.SECONDARY} iconBefore="backward2">Button icon left</Button>
          <Button color={ButtonColor.SECONDARY} variant={ButtonVariant.OUTLINE} iconBefore="backward2">Button icon left</Button>
          <Button color={ButtonColor.TERTIARY} iconBefore="backward2">Button icon left</Button>
          <Button color={ButtonColor.TERTIARY} variant={ButtonVariant.OUTLINE} iconBefore="backward2">Button icon left</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
