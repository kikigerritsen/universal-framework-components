import { ButtonColor } from "shared-styles";
import { theme } from "../theme";

/**
 * Based on the received color we return a hover color
 * @param color ButtonColor
 * @returns expected shade fitting the received color
 */
export const getHoverTint = (color: typeof ButtonColor) => {
  switch (color) {
    case ButtonColor.PRIMARY:
      return theme.shades.PRIMARY_LIGHTER;
    case ButtonColor.SECONDARY:
      return theme.shades.SECONDARY_LIGHTER;
    case ButtonColor.TERTIARY:
      return theme.shades.TERTIARY_LIGHTER;
    default:
      return theme.shades.PRIMARY_LIGHTER;
  }
};

/**
 * Based one the received color we determine if the color is light or dark
 * @param color ButtonColor
 * @returns boolean
 */
export const hasLightTint = (color: typeof ButtonColor): boolean => {
  if (color === ButtonColor.SECONDARY) {
    return true;
  }
  return false;
};
