/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { defaultButton } from 'shared-styles';
import { ButtonVariant } from 'shared-styles';

import { theme, colorScheme } from "../../../theme";
import { getHoverTint, hasLightTint } from "../../../utils/color";

const styleSolidButton = (props: StyledButtonProps) => css`
  ${defaultButton}

  background-color: ${colorScheme[props.color]};
  color: ${hasLightTint(props.color)
    ? theme.colors.ROCKSTARS_LIGHT
    : theme.colors.ROCKSTARS_DARK};

  :hover {
    background-color: ${getHoverTint(props.color)};
  }
`;

const styleOutlineButton = (props: StyledButtonProps) => css`
  ${defaultButton}

  background-color: transparent;
  border-color: ${colorScheme[props.color]};
  color: inherit;

  :hover {
    background-color: ${getHoverTint(props.color)};
    border-color: ${getHoverTint(props.color)};
    color: ${hasLightTint(props.color)
      ? theme.colors.ROCKSTARS_LIGHT
      : theme.colors.ROCKSTARS_DARK};
  }
`;

// TODO: These two should be retrieved from 'shared-styles'
type ButtonVariantType = "OUTLINED" | "SOLID";
type ColorVariantType = "PRIMARY" | "SECONDARY" | "TERTIARY";

type StyledButtonProps = {
  variant: ButtonVariantType;
  color: ColorVariantType;
};

export const StyledButton = styled.button((props: StyledButtonProps) => {
  return props.variant === ButtonVariant.SOLID
    ? styleSolidButton
    : styleOutlineButton;
});
