import { css } from "@emotion/css";

const resetButton = `
  border: none;
  cursor: pointer;
`;

export const defaultButton = `
  ${resetButton}
  border: 2px solid transparent;

  padding: 13px 29px;
  font-size: 1rem;
  line-height: calc(1rem + 1px);
  text-align: left;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "DIN 2014 Bold", Fallback, sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  .icon {
    transition: transform 0.2s;
    margin-bottom: 2px;
  }

  :hover {
    .icon-after {
      transform: translate(6px, 0);
    }

    .icon-before {
      transform: translate(-6px, 0);
    }
  }
`;
