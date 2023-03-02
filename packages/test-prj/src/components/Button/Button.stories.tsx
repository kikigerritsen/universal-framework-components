
import React from "react";
import { Meta, Story } from "@storybook/react";

import { ButtonColor, ButtonVariant } from "shared-styles";

import Button, { ButtonProps } from "./Button";

export default {
    component: Button,
    title: 'Components/Button',
    argTypes: {
        variant: {
            options: ButtonVariant,
            control: { type: 'radio' },
            defaultValue: ButtonVariant.SOLID,
        },
        color: {
            options: ButtonColor,
            control: { type: 'radio' },
            defaultValue: ButtonColor.PRIMARY,
        },
    },
    args: {
        children: "Default button",
        iconAfter: "forward3",
        iconBefore: "backward2",
    }
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return (
      <Button {...args} />
    );
};

export const Default = Template.bind({});