/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import Icon from "../Icon";

import { StyledButton } from './styles/Button.styles';
import { ButtonColor, ButtonVariant } from "shared-styles";

export type ButtonProps = {
  children?: React.ReactNode;
  iconBefore?: string;
  iconAfter?: string;
  variant?: typeof ButtonVariant;
  color?: typeof ButtonColor;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = ButtonVariant.SOLID,
  color = ButtonColor.PRIMARY,
  iconBefore,
  iconAfter,
}) => {
  const styleIconBefore = css`
    margin-right: 0.7em;
  `;

  const styleIconAfter = css`
    margin-left: 0.7em;
  `;

  return (
    <StyledButton variant={variant} color={color}>
      {iconBefore && (
        <Icon className="icon-before" css={styleIconBefore} icon={iconBefore} />
      )}
      {children}
      {iconAfter && (
        <Icon className="icon-after" css={styleIconAfter} icon={iconAfter} />
      )}
    </StyledButton>
  );
};

export default Button;
