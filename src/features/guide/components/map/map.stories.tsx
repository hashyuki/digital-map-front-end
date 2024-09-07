import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Map, mapVariants } from "./map";

type MapProps = React.ComponentProps<typeof Map>;

export default {
  title: "Features/Map",
  component: Map,
  argTypes: {
    size: {
      control: { type: "select" },
      options: Object.keys(mapVariants.variants.size),
    },
  },
  args: {
    size: "default",
  },
} as Meta<MapProps>;

type Story = StoryObj<MapProps>;

export const Default: Story = {
  args: {
    size: "default",
  },
};

export const FullScreen: Story = {
  args: {
    size: "fullScreen",
  },
};
