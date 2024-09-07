import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Input, InputProps } from "./input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default"],
    },
    type: {
      control: { type: "text" },
      defaultValue: "text",
    },
    disabled: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
  },
  args: {
    variant: "default",
    type: "text",
    disabled: false,
    placeholder: "Enter text",
    value: "",
  },
} as Meta<InputProps>;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Enter text",
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Enter text",
    value: "Enter text",
  },
};
