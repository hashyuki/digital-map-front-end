import * as TogglePrimitive from "@radix-ui/react-toggle";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FaBeer } from "react-icons/fa";
import { type VariantProps } from "tailwind-variants";
import { Toggle, toggleVariants } from "./toggle";

export type ToggleProps = React.ComponentPropsWithoutRef<
  typeof TogglePrimitive.Root
> &
  VariantProps<typeof toggleVariants>;

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
    },
    children: {
      control: { type: "text" },
    },
    pressed: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    variant: "default",
    size: "default",
    children: "Toggle",
    pressed: false,
    disabled: false,
  },
} as Meta<ToggleProps>;

type Story = StoryObj<ToggleProps>;

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Toggle",
  },
};

export const Default: Story = {
  args: {},
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

export const Pressed: Story = {
  args: {
    pressed: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
