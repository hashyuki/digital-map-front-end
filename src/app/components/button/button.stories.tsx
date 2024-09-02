import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FaBeer } from "react-icons/fa";
import { Button, ButtonProps } from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    asChild: false,
    disabled: false,
  },
} as Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Default: Story = {
  args: {
    asChild: false,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: <FaBeer size={18} />,
  },
};

export const Disabled: Story = {
  args: {
    asChild: false,
    disabled: true,
  },
};
