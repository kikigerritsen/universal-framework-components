import React from "react";

import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from "../../assets/selection.json";

const Icon: React.FC<{
  color?: string,
  size?: string | number,
  icon: string,
  className?: string
}> = props => {
  const { color = "currentColor", size = "1rem", icon, className = "" } = props;
  return (
    <IcomoonReact
      className={`icon ${className}`}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

export default Icon;