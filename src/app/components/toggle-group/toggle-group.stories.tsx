import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FaBeer } from "react-icons/fa";
import { type VariantProps } from "tailwind-variants";
import { toggleVariants } from "../toggle/toggle";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export type ToggleGroupProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Root
> &
  VariantProps<typeof toggleVariants>;

export default {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    value: {
      control: { type: "text" },
    },
  },
  args: {
    variant: "default",
    size: "default",
    disabled: false,
    value: "",
  },
} as Meta<ToggleGroupProps>;

type Story = StoryObj<ToggleGroupProps>;

export const Small: Story = {
  args: {
    size: "sm",
    value: "1",
    type: "single",
  },
  render: (args: ToggleGroupProps) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="1">Item 1</ToggleGroupItem>
      <ToggleGroupItem value="2">Item 2</ToggleGroupItem>
      <ToggleGroupItem value="3">Item 3</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Default: Story = {
  args: {
    value: "2",
    type: "single",
  },
  render: (args: ToggleGroupProps) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="1">Item 1</ToggleGroupItem>
      <ToggleGroupItem value="2">Item 2</ToggleGroupItem>
      <ToggleGroupItem value="3">Item 3</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Large: Story = {
  args: {
    size: "lg",
    value: "3",
    type: "single",
  },
  render: (args: ToggleGroupProps) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="1">Item 1</ToggleGroupItem>
      <ToggleGroupItem value="2">Item 2</ToggleGroupItem>
      <ToggleGroupItem value="3">Item 3</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Icon: Story = {
  args: {
    size: "icon",
    value: "1",
    type: "single",
  },
  render: (args: ToggleGroupProps) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="1">
        <FaBeer size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="2">
        <FaBeer size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="3">
        <FaBeer size={18} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const MultiSelect: Story = {
  args: {
    value: ["2", "3"],
    type: "multiple",
  },
  render: (args: ToggleGroupProps) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="1">Item 1</ToggleGroupItem>
      <ToggleGroupItem value="2">Item 2</ToggleGroupItem>
      <ToggleGroupItem value="3">Item 3</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "1",
    type: "single",
  },
  render: (args: ToggleGroupProps) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="1">Item 1</ToggleGroupItem>
      <ToggleGroupItem value="2">Item 2</ToggleGroupItem>
      <ToggleGroupItem value="3">Item 3</ToggleGroupItem>
    </ToggleGroup>
  ),
};
